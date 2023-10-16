import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import {BsPencilSquare,  BsThreeDotsVertical} from "react-icons/bs";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments ;
  const quizzes = db.quizzes;
  const exams = db.exams;
  const projects = db.projects;

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const courseQuizzes = quizzes.filter(
    (quizzes) => quizzes.course === courseId);
  const courseExams = exams.filter(
      (exams) => exams.course === courseId);
    const courseProjects = projects.filter(
      (projects) => projects.course === courseId);

  return (
    <div>
      <div className="mt-3">
            <input type="text" placeholder="Search for Assignment" className="float-start form-control form-control-sm w-25" />
            <div class="d-grid gap-1 d-flex justify-content-end mb-3">
                <button type="button" className="btn btn-secondary  btn-sm"><AiOutlinePlus className='me-1'/>Group</button>
                <button type="button" className="btn btn-danger  btn-sm"><AiOutlinePlus className='me-1'/>Assignment</button>
                <button type="button" className="btn btn-secondary  btn-sm"><BsThreeDotsVertical/></button>
            </div> 
            <hr style={{width:'90vw'}}/>
      </div>
      <div className="list-group mb-3">
        <li className="list-group-item list-group-item-action list-group-item-secondary">
            Assignments  
            <div className="float-end">
                <span className="me-2">
                    40% of Total
                </span>
                <AiOutlinePlus className="me-1"/>
                <BsThreeDotsVertical/>
            </div>
        </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            <div>
              <BsPencilSquare className="me-2"/>{assignment.title}
              <div className="float-end align-items-center">
                <AiOutlineCheckCircle className="me-1"/>
                <BsThreeDotsVertical/>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="list-group mb-3">
        <li className="list-group-item list-group-item-action list-group-item-secondary">
            Quizzes  
            <div className="float-end">
                <span className="me-2">
                    10% of Total
                </span>
                <AiOutlinePlus className="me-1"/>
                <BsThreeDotsVertical/>
            </div>
        </li>
        {courseQuizzes.map((quizzes) => (
          <Link
            key={quizzes._id}
            to={`/Kanbas/Courses/${courseId}/Quizzes/${quizzes._id}`}
            className="list-group-item">
            <div>
              <BsPencilSquare className="me-2"/>{quizzes.title}
              <div className="float-end align-items-center">
                <AiOutlineCheckCircle className="me-1"/>
                <BsThreeDotsVertical/>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="list-group mb-3">
        <li className="list-group-item list-group-item-action list-group-item-secondary">
            Exams  
            <div className="float-end">
                <span className="me-2">
                    20% of Total
                </span>
                <AiOutlinePlus className="me-1"/>
                <BsThreeDotsVertical/>
            </div>
        </li>
        {courseExams.map((exams) => (
          <Link
            key={exams._id}
            to={`/Kanbas/Courses/${courseId}/Exams/${exams._id}`}
            className="list-group-item">
            <div>
              <BsPencilSquare className="me-2"/>{exams.title}
              <div className="float-end align-items-center">
                <AiOutlineCheckCircle className="me-1"/>
                <BsThreeDotsVertical/>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="list-group mb-3">
        <li className="list-group-item list-group-item-action list-group-item-secondary">
          Projects  
          <div className="float-end">
              <span className="me-2">
                  30% of Total
              </span>
              <AiOutlinePlus className="me-1"/>
              <BsThreeDotsVertical/>
          </div>
        </li>
        {courseProjects.map((projects) => (
          <Link
            key={projects._id}
            to={`/Kanbas/Courses/${courseId}/Projects/${projects._id}`}
            className="list-group-item">
            <div>
              <BsPencilSquare className="me-2"/>{projects.title}
              <div className="float-end align-items-center">
                <AiOutlineCheckCircle className="me-1"/>
                <BsThreeDotsVertical/>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;