import { useRoutes } from 'react-router-dom'
import router from './routes'

import 'antd/dist/antd.min.css'
import './style/App.css'

function App() {
  return useRoutes(router)
}

export default App