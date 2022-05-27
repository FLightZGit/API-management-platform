import { isLogined } from './auth'
import { Navigate } from 'react-router-dom'

function FrontendAuth({ children }) {
    if(isLogined) {
        return <>{ children }</>
    } else {

        return <Navigate to = "/login" replace/>
    }
    
}

export default FrontendAuth