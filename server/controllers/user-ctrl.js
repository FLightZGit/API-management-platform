const jwt = require('jsonwebtoken')
const User = require('../models/user-model')
const {encrypt} = require('../unit')
const{ SECRET_CONFIG } = require('../config')

const getUsers = async (ctx) => {
    const users = await User.find({})

    ctx.body = users
}

const login = async (ctx) => {


    
    const { 
        password,
        remember,
        username,
    } = ctx.request.body
   
  const users = await User.find({UserName: username})

     /*let user = null
   for(let i = 0; i < users.length; i ++ ){
       if(username == users[i].UserName){
            user = users[i];
            break;
       }
   }*/
  
   //ctx.body = user


   if(users.length == 0) {
        //ctx.status = 401;
        ctx.body = {
            msg: 'fail',
            data: '用户不存在' 
        }
        return
   } else {
       if(users[0].Password === encrypt(password)) {
        const token = jwt.sign(
            {
              name: username
            },
            SECRET_CONFIG, // secret
            { expiresIn: 3600 } ,// 60 * 60 s
            { time : new Date()}
          )
           ctx.body = {
               msg: 'success',
               username:'',
               data: '登录成功',
               token:{token}
           }
       } else {
           ctx.body = {
               msg: 'fail',
               data: '密码错误' ,
               name: username,
               pwd: password
           }
       }
   }

}

const getUserById = async (ctx) => {
    const userId = ctx.params.userId
    const user = await User.findById(userId)

    ctx.body = user
}

const createUser = async (ctx) => {
    const username = ctx.request.body.UserName;
    const password = encrypt(ctx.request.body.Password);
    const mail = ctx.request.body.Mail
    const users = await User.find({UserName: username})
    if(users.length == 0) {
        const newUser = new User({UserName:username, Password:password, Mail:mail})
        const savedUser = await newUser.save()
        ctx.body = savedUser
        return
    } else {
        ctx.body = {
            msg : 'fail',
            data : '用户名已存在'
        }
    }
    
}

const updateUser = async (ctx) => {
    const body = ctx.request.body
    const userId = ctx.params.userId
    const user = await User.findById(userId)

    user.UserName = body.UserName
    user.PassWord = body.PassWord
    user.Mail = body.Mail

    const updatedUser = await user.save()

    ctx.body = updatedUser
}

const deleteUser = async (ctx) => {
    const userId = ctx.params.userId
    const user = await User.findById(userId)

    const deletedUser = await user.remove()

    ctx.body = await User.find({})
}

module.exports = {
    getUsers,
    login,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}