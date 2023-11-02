import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import db from "../Database";

function TopHeader() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);

  return (
    <div>
      <h4>
        <div className="d-flex">
          <Link to={`/Kanbas/Courses/${courseId}/Home`} className="text-danger mt-2" style={{ textDecoration: 'none' }}>
            <FaBars className="mx-2" />
            {course ? course.number : 'Course Number'}
          </Link>
          <div className="mt-1">
            <MdOutlineKeyboardArrowRight />
          </div>
          <div className="mt-2">
            {pathname.split("/").pop()} {/* Display the last segment of the path as "screen" */}
          </div>
        </div>
      </h4>
      <hr style={{ width: '90vw', marginLeft: '10px' }} />
    </div>
  );
}

export default TopHeader;

