import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as client from "./client";
import {
  addModule, deleteModule, updateModule, setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";

function ModuleList() {
  const { courseId } = useParams();

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();


  // const findAllModules = async() => {
  //   const modules = await client.findModulesForCourse(courseId);
  //   setModules(modules);
  // }
  

  // const addModule = async() => {
  //   const newModule = await client.addModule(courseId, module);
  //   setModules([newModule, ...modules]);
  // };

  // const deleteModule = async(moduleId) => {
  //   await client.deleteModule(moduleId);
  //   setModules(modules.filter((m) => m._id !== moduleId));
  // };

  // const updateModule = async() => {
  //   await client.updateModule(module);
  //   setModules(modules.map((m)=> (m._id === module._id? module: m)));
  // };

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleEditModule = (selectedModule) => {
    dispatch(setModule(selectedModule)); 
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  return (
    <ul className="list-group">
      <li className="list-group-item mb-3 d-flex">
        <input
          value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          className="form-control col-s-4 mx-1"
          placeholder="Module Name"
        />
        <button 
          onClick={handleAddModule}
          className="btn btn-warning mx-1 col-sm">
          Add
        </button>
        <button 
          onClick={handleUpdateModule}
          className="btn btn-primary mx-1 col-sm">
          Update
        </button>
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="float-end">
              <button 
                className="btn btn-sm btn-danger"
                onClick={() => handleDeleteModule(module._id)}
                >
                Delete
              </button>
              <button 
                className="btn btn-sm btn-success"
                onClick={() => handleEditModule(module)}
                >
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
