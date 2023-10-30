import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { BsPencilSquare, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineCheckCircle, AiOutlinePlus } from "react-icons/ai";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  const filteredModules = modules.filter((module) => module.course === courseId);
  const modulesByWeek = filteredModules.reduce((acc, module) => {
    if (module.lessons) {
      module.lessons.forEach((lesson) => {
        if (!acc[lesson.week]) {
          acc[lesson.week] = [];
        }
        if (!acc[lesson.week].includes(module)) {
          acc[lesson.week].push(module);
        }
      });
    }
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(modulesByWeek).map((week, index) => (
        <div key={index} className="list-group mb-3">
          <li className="list-group-item list-group-item-action list-group-item-secondary">
            <span>Week {week} - Intro</span>
            <div className="float-end me-3">
              <AiOutlineCheckCircle className="me-1" />
              <AiOutlinePlus className="me-1" />
              <BsThreeDotsVertical />
            </div>
          </li>
          {
            modulesByWeek[week].map((module, moduleIndex) => (
              <li key={moduleIndex} className="list-group-item">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-2">
                    {module.name}
                  </div>
                  <div className="float-end me-3 mb-2">
                    <AiOutlineCheckCircle className="me-1" />
                    <BsThreeDotsVertical />
                  </div>
                </div>
                {module.lessons
                  .filter((lesson) => lesson.week === week)
                  .map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="list-group-item">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          {lesson.name}
                        </div>
                        <div className="float-end">
                          <AiOutlineCheckCircle className="me-1" />
                          <BsThreeDotsVertical/>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </li>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default ModuleList;
