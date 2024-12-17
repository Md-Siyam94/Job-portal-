import { useContext } from "react"
import { AuthContext } from "./AuthProvider"

const useAuth =()=>{

    const contex = useContext(AuthContext)
    return contex
}
export default useAuth;