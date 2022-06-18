const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors')  
const koajwt = require('koa-jwt')
const jsonwebtoken = require('jsonwebtoken')

const{ extend_ctx } = require('./extend')
const{ SECRET_CONFIG } = require('./config')
const db = require('./db')
const apiRouter = require('./routes/api-router')
const projectRouter = require('./routes/project-router')
const userRouter = require('./routes/user-router')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(cors())
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 错误处理
app.use((ctx, next) => {
  return next().catch((err) => {
      if(err.status === 401){
          ctx.status = 401;
        ctx.body = 'Protected resource, use Authorization header to get access\n';
      }else{
          throw err;
      }
  })
})

// 注意：放在路由前面
app.use(koajwt({
  secret: SECRET_CONFIG
}).unless({ // 配置白名单
  path: [/register/, /login/, /projectname/]
}))

/*
//生成token
const extend_ctx_jwt = {
    ...jsonwebtoken,
    secret: SECRET_CONFIG
}

//校验token
app.use(
  jwt({
    secret:SECRET_CONFIG
  }).unless({
    path:[/register/, /login/]
  })
)


app.use(
  extend_ctx('jwt', extend_ctx_jwt)
)*/

// routes
app.use(apiRouter.routes(), apiRouter.allowedMethods())
app.use(projectRouter.routes(), projectRouter.allowedMethods())
app.use(userRouter.routes(), userRouter.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

module.exports = app
