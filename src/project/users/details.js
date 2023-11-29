import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as client from "./client";

function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchUser = async () => {
    const user = await client.findUserById(id);
    setUser(user);
  };

  const updateUser = async()=> {
    const status = await client.updateUser(id,user);

  }

  const deleteUser  = async(id)=> {
    const status = await client.deleteUser(id);
    navigate("/project/users");
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h2>User Details</h2>
      {user && (
        <div>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>First Name:
                <input 
                   type="text"
                   className="form-control"
                   value={user.firstName}
                   onChange={(e)=>setUser({...user,firstName: e.target.value})} >
                </input>
            </p>
            <p>Last Name: {user.lastName}</p>
            <button className="btn btn-primary" onClick={updateUser}>
                Update
            </button>
            <button 
                className="btn btn-danger" 
                onClick={() => deleteUser(user._id)}>
                Delete
            </button>
        </div>
      )}
    </div>
  );
}

export default UserDetails;