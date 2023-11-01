import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignment,
  addAssignment,
  updateAssignment,
} from "../assignmnetsReducer";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();

  return (
    
    <div>
      <div className="my-2">Assignment Name</div>
      <input 
          className="form-control mb-2"
          value={assignment.title}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }/>

      <label for="description" class="form-label">Description</label>
      
      <textarea
          type="text" 
          className="form-control mb-3" 
          id="description"  
          rows="8" 
          placeholder="Enter Assignment Description"
          value={assignment.description}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))
          }
        />

      <div class="row mb-3">
          <label for="points" class="col-sm-3 col-form-label text-center">Points</label>
          <div class="col-sm-7">
              <input 
                type="text" class="form-control" id="points" 
                value={assignment.points}
                onChange={(e) =>
                  dispatch(setAssignment({ ...assignment, points: e.target.value }))
                }
              />
          </div>
      </div>

    <div class="row mb-3">
      <label for="display-grade" class="col-sm-3 col-form-label text-center">Assign</label>
      <div class="col-sm-7 card">
        <div class="col-sm-12 my-2">
            <label for="dueDate" class="form-label">Due Date</label>
            <input 
                value={assignment.dueDate}
                type="date" class="form-control" id="dueDate"
                onChange={(e) =>
                  dispatch(setAssignment({ ...assignment, dueDate: e.target.value }))
                }/>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <label for="availableFrom" class="form-label">Available From</label>
                <input 
                    value={assignment.availableFromDate}
                    type="date" class="form-control" id="availableFrom"
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
                    }/>
            </div>
            <div class="col-sm-6">
                <label for="until" class="form-label">Until</label>
                <input 
                    value={assignment.availableUntilDate}
                    type="date" class="form-control" id="until"
                    onChange={(e) =>
                      dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
                    }/>
            </div>
            </div>
        </div>
      </div>
      <div>
        <hr style={{width: '100vw'}}/> 
        <div className='float-end'>
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger mb-2">
            Cancel 
          </Link>
          <button 
              onClick={() => dispatch(updateAssignment(assignment))} 
              className="btn btn-success me-2 mb-2">
            Update
          </button>
          <button 
              onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))} 
              className="btn btn-success me-2 mb-2">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AssignmentEditor;
