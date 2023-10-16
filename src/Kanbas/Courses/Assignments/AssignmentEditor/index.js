import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <div className="my-2">Assignment Name</div>
      <input value={assignment.title}
             className="form-control mb-2" />

      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control mb-3" id="description"  rows="8" placeholder="Enter Assignment Description">
        {assignment.description}
      </textarea>

      <div class="row mb-3">
          <label for="points" class="col-sm-3 col-form-label text-center">Points</label>
          <div class="col-sm-7">
              <input type="text" class="form-control" id="points" placeholder="Enter Points"/>
          </div>
      </div>

      <div class="row mb-3">
          <label for="group" class="col-sm-3 col-form-label text-center">Assignment Group</label>
          <div class="col-sm-7">
              <select id="group" class="form-select">
                  <option selected>ASSIGNMENTS</option>
                  <option>...</option>
              </select>
          </div>
      </div>

      <div class="row mb-3">
          <label for="display-grade" class="col-sm-3 col-form-label text-center">Display Grade as</label>
          <div class="col-sm-7">
              <select id="display-grade" class="form-select">
                  <option selected>Percentage</option>
                  <option>...</option>
              </select>
          </div>
      </div>

      <div class="row mb-3">
          <div class=" col-sm-3"> </div>
          <div class="form-check col-sm-7">
            <input class="form-check-input" type="checkbox" id="countAssignmentToFinal"/>
            <label class="form-check-label" for="countAssignmentToFinal">
              Do not count this assignment towards the final grade
            </label>
          </div>
      </div>


      <div class="row mb-3">
          <label for="display-grade" class="col-sm-3 col-form-label text-center">Submission Type</label>
          <div class="col-sm-7 card">
              <div class="col-sm-8 my-4">
                  <select id="display-grade" class="form-select">
                      <option selected>Online</option>
                      <option>...</option>
                  </select>
              </div>
              <div>
                  <span>Online Entry Options</span>
                  <div class="form-check col-sm-7 my-2">
                      <input class="form-check-input" type="checkbox" id="gridCheck"/>
                      <label class="form-check-label" for="gridCheck">
                        Text Entry
                      </label>
                  </div>
                  <div class="form-check col-sm-7 my-2">
                      <input class="form-check-input" type="checkbox" id="websiteURL"/>
                      <label class="form-check-label" for="websiteURL">
                        Website URL
                      </label>
                  </div>
                  <div class="form-check col-sm-7 my-2">
                      <input class="form-check-input" type="checkbox" id="mediaRecording"/>
                      <label class="form-check-label" for="mediaRecording">
                        Media Recordings
                      </label>
                  </div>
                  <div class="form-check col-sm-7 my-2">
                      <input class="form-check-input" type="checkbox" id="studentAnnotation"/>
                      <label class="form-check-label" for="studentAnnotation">
                        Student Annotation
                      </label>
                  </div>
                  <div class="form-check col-sm-7 my-2">
                      <input class="form-check-input" type="checkbox" id="fileUploads"/>
                      <label class="form-check-label" for="fileUploads">
                        File Uploads
                      </label>
                  </div>
              </div>
        </div>
    </div>

    <div class="row mb-3">
      <label for="display-grade" class="col-sm-3 col-form-label text-center">Assign</label>
      <div class="col-sm-7 card">
        <div class="col-sm-12 my-2">
            Assign to
            <select id="display-grade" class="form-select my-2">
                <option selected>Online</option>
                <option>...</option>
            </select>
        </div>
        <div class="col-sm-12 my-2">
            <label for="dueDate" class="form-label">Due Date</label>
            <input type="date" class="form-control" id="dueDate"/>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label for="availableFrom" class="form-label">Available From</label>
                <input type="date" class="form-control" id="availableFrom"/>
            </div>
            <div class="col-sm-6">
                <label for="until" class="form-label">Until</label>
                <input type="date" class="form-control" id="until"/>
            </div>
            </div>
        </div>
      </div>
      <div>
        <hr style={{width: '100vw'}}/>
        <div class="float-start">
          <div class="form-check">
              <input className="form-check-input" type="checkbox" id="norifyChanged"/>
              <label className="form-check-label" for="countAssignmentToFinal">
                Notify users that this content has changed
              </label>
          </div>
        </div>  
        <div className='float-end'>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger mb-2">
            Cancel 
          </Link>
          <button onClick={handleSave} className="btn btn-success me-2 mb-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}


export default AssignmentEditor;