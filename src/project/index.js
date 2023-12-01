import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "./nav";
import UserList from "./users/list";
import UserDetails from "./users/details";
import SignIn from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import SignUp from "./users/signup";

function Project() {
  return (
    <div className="container-fluid pt-3">
      <div className="row">
        <div className="col-2">
          <Nav />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/users" element={<UserTable />} />
            <Route path="/users/:id" element={<UserDetails/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/account" element={<Account />} /> 
            <Route path="/account/:id" element={<Account />} />

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;