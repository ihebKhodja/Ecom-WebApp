import { createContext, useReducer } from "react";
import { ACTIONS_AUTH } from "../Constants";

export const AuthContext= createContext('');
const authReducer= (state, action)=>{
    if(action.type ==ACTIONS_AUTH.LOGIN){
        return {user: action.payload.user, token:action.payload.token
        }
    }
    else if(action.type ==ACTIONS_AUTH.LOGOUT){
        return {'user': {}, 'token': null}
    }
    else{
        return state
    }
}


const AuthContextProvider = ({children}) => {
    const [state, dispatch]= useReducer(authReducer, {
    'user':{},
    'token':null
    })
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
                {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;