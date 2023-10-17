import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaSignOutAlt, FaNetworkWired } from "react-icons/fa";
import { BsFillCalendar2WeekFill, BsFillInboxFill, BsClock, BsQuestionCircle} from "react-icons/bs";
import logoImage from "../../NEUlogo.png"; 
import "./index.css"

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const linkToIconMap = {
    Account: <BiUserCircle className="wd-account-icon"/>,
    Dashboard: <RiDashboard3Fill className="wd-icon"/>,
    Courses: <FaBook className="wd-icon"/>,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon"/>,
    Inbox: <BsFillInboxFill className="wd-icon"/>,
    History: <BsClock className="wd-icon"/>,
    Studio: <FaNetworkWired className="wd-icon"/>,
    Commons: <FaSignOutAlt className="wd-icon"/>,
    Help: <BsQuestionCircle className="wd-icon"/>,
  };
  
  
  
  const { pathname } = useLocation();
  return (
    <div className="wd-kanbas-navigation" style={{ width: 100, height: '100vw'}}>
      <div className="logo-container">
        <img src={logoImage} alt="Your Logo" className="tp-logo" />
      </div>
      <div className="list-group">
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {linkToIconMap[link]}
            <br/>
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default KanbasNavigation;