import db from "../../Database";
import { useParams } from "react-router-dom";
import {AiFillSetting} from "react-icons/ai";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);


  return (
    <div className="me-2">
      <div className="d-grid gap-1 d-flex justify-content-end mb-1 mt-3">
        <button type="button" className="btn btn-secondary btn-sm">Import</button>                    
        <div class="dropdown">
            <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                <li><a className="dropdown-item" href="#">...</a></li>
            </ul>
        </div>
        <button type="button" className="btn btn-secondary btn-sm">
          <AiFillSetting/>
        </button>
      </div> 
      <div className="row mb-1">
          <label for="studentNames" className="col-sm-6 col-form-label "><b>Student Names</b></label>
          <label for="assignmentNames" className="col-sm-6 col-form-label "><b>Assignment Names</b></label>
      </div>
      <div className="row mb-2">
          <div className="col-sm-6">
              <input type="text" className="form-control" id="studentNames" placeholder="Search Students"/>
          </div>
          <div className="col-sm-6">
              <input type="text" className="form-control" id="assignmentNames" placeholder="Search Assignments"/>
          </div>
      </div>
      <div className="mb-3">
          <button type="button" className="btn btn-secondary btn-sm">Apply Filters</button>                    
      </div> 

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <th style={{ minWidth: '180px'}}>Student Name</th>
            {
              assignments.map((assignment) => (<th className="text-center" style={{ minWidth: '150px'}}>{assignment.title}</th>))
            }
          </thead>


          <tbody>
            {
              enrollments.map((enrollment) => {
                const user = db.users.find((user) => user._id === enrollment.user);
                return (
                  <tr>
                    <td>{user.firstName} {user.lastName}</td>
                    {
                      assignments.map((assignment) => {
                        const grade = db.grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment == assignment._id);
                        return (
                          <td className="text-center">
                            {grade?.grade ? `${grade.grade}%`:  <input style={{width:'70px'}} type="number" min="0" max="100" step="0.01"/>}
                          </td>);
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      </div>
      );
}
export default Grades;

