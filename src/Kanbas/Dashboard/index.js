import { Link } from "react-router-dom";
import "./index.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiNotebookBold } from "react-icons/pi";
import {React, useState, useEffect} from "react";
import axios from "axios";

function Dashboard() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});

  const addCourse = async () => {
    const response = await axios.post("http://localhost:4000/api/courses", course);
    const newCourse = response.data; 
    setCourses([
      newCourse,
      ...courses
    ]);
    setCourse({ name: "" });
  };

  const deleteCourse = async (id) => {
    const response = await axios.delete(
      `http://localhost:4000/api/courses/${id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== id));
  };

  const updateCourse = async () => {
    const response = await axios.put(
      `http://localhost:4000/api/courses/${course._id}`,
      course
    );
    setCourses(courses.map((c) => (c._id ===course._id ? course: c)));
  };


  const findAllCourses = async () => {
    const response = await axios.get("http://localhost:4000/api/courses");
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  return (
    <div className="db-container">
      <div>
        <h1 >Dashboard</h1>
        <hr style={{width: "100vw"}}/>
      </div>

      <div className="db-mt-0">
        <div className="db-format">
          <h4>Published Courses ({courses.length})</h4><hr/>

          <div className="list-group my-3">
            <div className="list-group-item d-flex">
              <input 
                className="col-sm mx-1"
                placeholder="Course Name"
                onChange={(e) => setCourse({
                  ...course, name: e.target.value })}
                value={course.name} type="text"
              />
              <button 
                onClick={addCourse}
                className="btn btn-warning mx-1 col-sm">
                Add
              </button>
              <button 
                onClick={updateCourse}
                className="btn btn-primary mx-1 col-sm">
                Update
              </button>
            </div>
          </div>
          

          <div className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
              {courses.map((course, index) => (
                <div className="col" style={{width:300}}>
                    <div className="card">
                        <Link
                        key={course._id}
                        to={`/Kanbas/Courses/${course._id}`}
                        >
                        <div className={`course-head course-bg-${course._id}  course-bg-default`}>
                          <BiDotsVerticalRounded className="float-end mt-2 me-2" />
                        </div>
                    
                        </Link>
                        <div className="course-body">
                            <span className={`course-text-${course._id} course-text-default`}>{course.name}</span><br />
                            {course.number}<br />
                            <PiNotebookBold /><br />
                          </div>
                        <div className="d-flex mt-3">
                        <button 
                            onClick={() => setCourse(course)}
                            className="btn btn-warning col">
                            Edit
                          </button>
                          <button 
                            onClick={() => deleteCourse(course._id)}
                            className="btn btn-danger col">
                            Delete
                          </button>
                        </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>          

            
        </div>
      </div>
    </div>

  );
}
export default Dashboard;




     
   