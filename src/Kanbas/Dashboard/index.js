import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiNotebookBold } from "react-icons/pi";


function Dashboard() {
  const courses = db.courses;
  return (
    <div className="db-container">
      <div>
        <h1 >Dashboard</h1>
        <hr style={{width: "100vw"}}/>
      </div>

      <div className="db-mt-0">
        <div className="db-format">
          <h4>Published Courses ({courses.length})</h4><hr/>
          <div className="d-flex flex-row flex-wrap">
            {courses.map((course) => (
              <Link
              key={course._id} 
              to={`/Kanbas/Courses/${course._id}`}
              className="course custom-mx-0">
              <div className={`course-head course-bg-${course._id}`}>
                <BiDotsVerticalRounded className="float-end mt-2 me-2"/>
              </div>
              <div className="course-body">
                <span className={`course-text-${course._id}`}>{course.name}</span><br />
                {course.number}<br />
                <PiNotebookBold/>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;