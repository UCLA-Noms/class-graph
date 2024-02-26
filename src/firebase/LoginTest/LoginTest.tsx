import {login, logout} from '../authentication'
import { getCurrentUser } from '../firebase';

const LoginTest= () => {
    return (
        <div>
            {getCurrentUser() ? 
            <button onClick={() => {logout();}}>logout</button>
            :
            <button onClick={() => {login();}}>login</button>
            } 
        </div>
        );
  };
  
export default LoginTest;
  