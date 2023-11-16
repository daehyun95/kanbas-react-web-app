import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import TopHeader from "./TopHeader";

import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import Piazza from "./Piazza";
import ZoomMeetings from "./ZoomMeetings";
import Quizzes from "./Quizzes";
import People from "./People";
import PanoptoVideo from "./PanoptoVideo";
import Discussions from "./Discussions";
import Announcements from "./Announcements";
import Pages from "./Pages";
import Files from "./Files";
import Rubrics from "./Rubrics";
import Outcomes from "./Outcomes";
import Collaborations from "./Collaborations";
import Syllabus from "./Syllabus";
import Settings from "./Settings";
import { useState, useEffect } from "react";
import axios from "axios";


function Courses() {
  const {courseId} = useParams();
  const [course, setCourse] = useState({});
  
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `http://localhost:4000/api/courses/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);


  return (
    <div>
      <TopHeader/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<Piazza/>} />
            <Route path="ZoomMeetings" element={<ZoomMeetings/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Quizzes" element={<Quizzes />} />
            <Route path="Grades" element={<Grades />} />
            <Route path="People" element={<People />} />
            <Route path="Panopto Video" element={<PanoptoVideo />} />
            <Route path="Discussions" element={<Discussions />} />
            <Route path="Announcements" element={<Announcements />} />
            <Route path="Pages" element={<Pages />} />
            <Route path="Files" element={<Files />} />
            <Route path="Rubrics" element={<Rubrics />} />
            <Route path="Outcomes" element={<Outcomes />} />
            <Route path="Collaborations" element={<Collaborations />} />
            <Route path="Syllabus" element={<Syllabus />} />
            <Route path="Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}
export default Courses;