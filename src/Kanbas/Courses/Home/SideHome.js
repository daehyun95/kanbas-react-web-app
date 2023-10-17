import {PiChartBarFill} from "react-icons/pi";
import {AiOutlineCalendar, AiOutlineBell} from "react-icons/ai";
import {BsCalendar3} from "react-icons/bs";
import {FaFileImport} from "react-icons/fa";
import {CgImport} from "react-icons/cg";
import {TfiTarget} from "react-icons/tfi";
import {TbSpeakerphone} from "react-icons/tb";

import { Link, useParams } from "react-router-dom";

import db from "../../Database";

function SideHome() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const filteredAssignments = assignments.filter((assignment) => assignment.course === courseId);

    return(
        <div>
            <div className="d-grid gap-2 mb-3 ">
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <FaFileImport className="me-1" /> Import Existing Content
                </Link>
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <CgImport className="me-1" /> Import From Commons
                </Link>
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <TfiTarget className="me-1" /> Choose Home Page
                </Link>
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <PiChartBarFill className="me-1" /> View Course Stream
                </Link>
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <TbSpeakerphone className="me-1" /> New Announcement
                </Link>
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <PiChartBarFill className="me-1" /> New Analytics
                </Link>
                <Link to="#" className="p-2 bg-light border d-flex align-items-center text-decoration-none text-dark">
                    <AiOutlineBell className="me-1" /> View Course Notifications
                </Link>
            </div>
            <span className="fw-bold">To Do</span>
            <hr />
            <div>
                {filteredAssignments.map((assignment) => (
                    <Link to="#" className="row mb-2 ms-2 text-decoration-none" key={assignment._id}>
                        <div class="col-2 text-danger"><BsCalendar3 /></div>
                        <div class="col-10">
                            <div class=" text-danger">{assignment.course}</div>
                            <div class=" text-dark">{assignment.title}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
export default SideHome;