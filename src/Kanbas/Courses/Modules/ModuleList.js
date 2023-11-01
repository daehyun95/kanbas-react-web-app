import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <div className="list-group mb-4" style={{width:'40%'}}>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
        <div className="d-flex ">
          <button  className="btn btn-sm btn-primary" 
            onClick={() => dispatch(updateModule(module))}>
                  Update
          </button>
          <button className="btn btn-sm btn-success" 
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
              Add
          </button>
        </div>

      </div>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="float-end">
              <button className="btn btn-sm btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button className="btn btn-sm btn-success"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
            </div>
            <h5>{module.name}</h5>
            {module.description}<br/>
            {module._id}
          </li>))}
    </ul>
  );
}
export default ModuleList;
