import { useState } from "react";
import * as client from "./client";
import {Link, useNavigate} from "react-router-dom"; 

function SignIn() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const signIn = async () => {   
        try {
            const credentials = {username:username, password: password};
            const user = await client.signIn(credentials);
            navigate("/project/account");
        } catch (err) {
            setError("Sign In Failed");
        }
    }

    return(
        <div>
            <h2>Sign In</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <input 
                type="text"
                className="form-control"
                placeholder="username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}>
            </input>
    
            <input 
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}>
            </input>
        
            <button 
                onClick={signIn}
                className="btn btn-primary">
                Sign In
            </button>
        </div>
    )
}
export default SignIn;