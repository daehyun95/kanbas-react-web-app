import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import db from "./Database";
import { useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

// import Calendar from "./Calendar";
// import Inbox from "./Inbox";
// import History from "./History";
// import Studio from "./Studio";
// import Help from "./Help";


function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const [course, setCourse] = useState({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
    });
    const addNewCourse = () => {
      // console.log('Courses before adding:', courses);
      setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
      // console.log('Courses after adding:', [...courses, { ...course, _id: new Date().getTime().toString() }]);

    };
    const deleteCourse = (courseId) => {
      setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };


    return (
      <Provider store={store}>
        <div className="d-flex">
          <KanbasNavigation/>
          <div>
              <Routes>
                  <Route path="/" element={<Navigate to="Dashboard" />} />
                  <Route path="Account" element= {<Account/>} />
                  <Route path="Dashboard" element={
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}/>
                  } />
                  <Route
                    path="Courses"
                    element={<Navigate to={`RS101/Home`} />}
                  />
                  <Route path="Courses/:courseId/*" 
                    element={<Courses courses={courses} />} />
                
                  {/* <Route path="Calendar" element= {<Calendar/>} />
                  <Route path="Inbox" element= {<Inbox/>} />
                  <Route path="History" element= {<History/>} />
                  <Route path="Studio" element= {<Studio/>} />
                  <Route path="Commons" element= {<Commons/>} />
                  <Route path="Help" element= {<Help/>} /> */}
              </Routes>

          </div>
        </div>
      </Provider>
    );
  }
  export default Kanbas;