import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findAssignmentsForCourse, createAssignment } from "../client";
import * as client from "../client";

import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "../assignmnetsReducer";


function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate(); 
  const [localAssignment, setLocalAssignment] = useState({ ...assignment });

  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((newAssignment) => {
      dispatch(addAssignment(newAssignment));
      navigate(`/kanbas/courses/${courseId}/assignments`);
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };
  
  const handleSaveAssignment = async () => {
    if (assignmentId !== "add") {
      // If the assignment already has an ID, it means it exists, so update it.
      await client.updateAssignment(localAssignment);
      dispatch(updateAssignment(localAssignment));
    } else {
      // If the assignment doesn't have an ID, it's a new assignment, so add it.
      const newAssignment = await createAssignment(courseId, assignment);
      dispatch(addAssignment(newAssignment));
    }

    navigate(`/kanbas/courses/${courseId}/assignments`);
  };

  useEffect(() => {
    if (assignmentId !== "add") {
      const editAssign = assignments.find((ad) => ad._id === assignmentId);
      setLocalAssignment(editAssign);
    } 
  }, [assignmentId, assignments]);



  return (
    <> 
      {assignmentId!=="add" ? (
        <div>  
          <div className="my-2">Assignment Names</div>
          <input
            className="form-control mb-2"
            value={localAssignment.title}
            onChange={(e) =>
              setLocalAssignment({ ...localAssignment, title: e.target.value })
            }
          />

          <label for="description" class="form-label">Description</label>
          
          <textarea
              type="text" 
              className="form-control mb-3" 
              id="description"  
              rows="8" 
              placeholder="Enter Assignment Description"
              value={localAssignment.description}
              onChange={(e) =>
                setLocalAssignment({ ...localAssignment, description: e.target.value })
              }
            />

          <div class="row mb-3">
              <label for="points" class="col-sm-3 col-form-label text-center">Points</label>
              <div class="col-sm-7">
                  <input 
                    type="text" class="form-control" id="points" 
                    value={localAssignment.points}
                    onChange={(e) =>
                      setLocalAssignment({ ...localAssignment, points: e.target.value })
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
                    value={localAssignment.dueDate}
                    type="date" class="form-control" id="dueDate"
                    onChange={(e) =>
                      setLocalAssignment({ ...localAssignment, dueDate: e.target.value })
                    }
                    />
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <label for="availableFrom" class="form-label">Available From</label>
                    <input 
                        value={localAssignment.availableFromDate}
                        type="date" class="form-control" id="availableFrom"
                        onChange={(e) =>
                          setLocalAssignment({ ...localAssignment, availableFromDate: e.target.value })
                        }
                        />
                </div>
                <div class="col-sm-6">
                    <label for="until" class="form-label">Until</label>
                    <input 
                        value={localAssignment.availableUntilDate}
                        type="date" class="form-control" id="until"
                        onChange={(e) =>
                          setLocalAssignment({ ...localAssignment, availableUntilDate: e.target.value })
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
                onClick={handleSaveAssignment} 
                className="btn btn-success me-2 mb-2" >
                  Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        
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
                onClick={handleSaveAssignment} 
                className="btn btn-success me-2 mb-2" >
                  Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default AssignmentEditor;
