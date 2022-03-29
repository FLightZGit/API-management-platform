import 'antd/dist/antd.min.css'
import '../style/App.css'

import { useRoutes } from 'react-router-dom'
import router from '../routes'

function App() {
  return useRoutes(router)
}

export default App