import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import db from "../Database";

function TopHeader() {
    const { courseId } = useParams();
    const { pathname} = useLocation();
    const [qwe, kanbas, courses, id, screen] = pathname.split("/")
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div>
            <h4>  
            <div className="d-flex">
                <div className="text-danger mt-2">
                    <FaBars className="mx-2"/>
                    {course.number}
                </div>
                <div className="mt-1">
                <MdOutlineKeyboardArrowRight/>
                </div>
                <div className="mt-2">
                    {screen}
                </div>
                </div>
            </h4> 
            <hr style={{width:'90vw', marginLeft: '10px'}}/>
        </div>
    )
}
export default TopHeader