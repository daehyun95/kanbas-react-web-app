import { useState, useEffect } from 'react';
import * as client from './client';
import { Link, useNavigate, useParams } from 'react-router-dom'; 

function Account() {

    const { id } = useParams();

    const navigate = useNavigate();
    const[user, setUser] = useState(null);

    const fetchUser = async () => {
        try {
            const updatedUser = await client.account();
            setUser(updatedUser);
        } catch (error) {
            navigate('/project/signin');
        }
    };

    const updateUser = async () => {
        await client.updateUser(user);
      };

    const signout = async () => {
        const status = await client.signOut();
        navigate('/project/signin');
        
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setUser(user);
      };
    
    useEffect(() => {
        if (id) {
            findUserById(id);
          } else {
            fetchUser();
          }
      
    }, []);

  return (
    <div>
      <h1>Account</h1>
      {user && (
        <div>
            <p >User Name: {user.username}</p>
            <input value={user.password}
                className='form-control'
                placeholder='password'
                onChange={(e) => setUser({ ...user,password: e.target.value })}/>
            <input
                type='email'
                className='form-control'
                placeholder='email'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                type='text'
                placeholder='first name'    
                className='form-control'
                value={user.firstName}
                onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />  
            <input
                type='text'
                placeholder='last name'
                className='form-control'
                value={user.lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}            
            />
             <input value={user.dob}
                placeholder='date of birth'
                className='form-control'
                onChange={(e) => setUser({ ...user,
                dob: e.target.value })}
            />
            <select 
                value={user.role}
                className='form-control'
                onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <button className='btn btn-primary' onClick={updateUser}>  
                Save
            </button>
            <button className='btn btn-danger' onClick={signout}>Sign Out</button>
            {user.role === 'ADMIN' && (
                <Link to = {`/project/users`} className='btn btn-warning'>
                    Users
                </Link>
            )}
        </div>
      )}
    </div>
  );
}
export default Account;