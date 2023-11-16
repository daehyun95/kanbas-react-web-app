import {Route, Routes, Link, useLocation, Navigate} from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";

import store from "./store";
import { Provider } from "react-redux";
import React from "react";


function Labs() {
   const {pathname} = useLocation();
    return(
      <Provider store={store}>
         <div className="container">
            <h1>Labs</h1>
            <div className="nav nav-pills">
               <Link to="/Labs/a3" className={`nav-link ${pathname.includes("a3") ? "active": ""}`}>
                  Assignment3
               </Link>
               <Link to="/Labs/a4" className={`nav-link ${pathname.includes("a4") ? "active": ""}`}>
                  Assignment4
               </Link>
               <Link to="/Labs/a5" className={`nav-link ${pathname.includes("a5") ? "active": ""}`}>
                  Assignment5
               </Link>
            </div>
         
            <Routes>
               <Route path="/" element={<Navigate to ="a3"  />}/>
               <Route path="a3/*" element={<Assignment3  />}/>
               <Route path="a4" element={<Assignment4 />}/>
               <Route path="a5" element={<Assignment5 />}/>

            </Routes>
         </div>
      </Provider>
    );
 }
 export default Labs;