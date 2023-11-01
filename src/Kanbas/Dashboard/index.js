import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiNotebookBold } from "react-icons/pi";
import {React, useState} from "react";


function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  ) {
  
  return (
    <div className="db-container">
      <div>
        <h1 >Dashboard</h1>
        <hr style={{width: "100vw"}}/>
      </div>
      <div className="db-mt-0">
        <div className="db-format">
          <h4>Published Courses ({courses.length})</h4><hr/>
        </div>
      </div>
      <div>
        <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />

        <div className="d-grid gap-1 d-flex mb-3">
          <button onClick={addNewCourse} type="button" class="btn btn-success btn-sm mr-3">
            Add
          </button>
          <button onClick={updateCourse} type="button" class="btn btn-primary btn-sm">
            Update
          </button>
        </div>
      </div>


      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link
            key={course._id} 
            to={`/Kanbas/Courses/${course._id}`}
            className="course custom-mx-0">
            <div className={`course-head course-bg-default course-bg-${course._id}`}>
              <BiDotsVerticalRounded className="float-end mt-2 me-2"/>
            </div>
            <div className="course-body">
              <span className={`course-text-default course-text-${course._id}`}>{course.name}</span><br />
              {course.number}<br />
              <PiNotebookBold/>
            </div>
            <div className="d-grid gap-1 d-flex justify-content-end mb-3">
              <button className=" btn btn-sm btn-warning"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course._id);
                }}>
                Delete
              </button>
            </div>
        </Link>
        ))}
      </div>
    </div>

  );
}
export default Dashboard;




     
   