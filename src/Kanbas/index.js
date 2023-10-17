import KanbasNavigation from "./KanbasNavigation";
import {Routes, Route, Navigate} from "react-router";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";

// import Inbox from "./Inbox";
// import History from "./History";
// import Studio from "./Studio";
// import Help from "./Help";


function Kanbas() {
    return (
      <div className="d-flex">
        <KanbasNavigation />
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="Dashboard" />} />
                <Route path="Account" element= {<Account/>} />
                <Route path="Dashboard" element= {<Dashboard/>} />
                <Route path="Courses/:courseId/*" element={<Courses />} />
                <Route path="Calendar" element= {<Calendar/>} />
                {/* <Route path="Inbox" element= {<Inbox/>} />
                <Route path="History" element= {<History/>} />
                <Route path="Studio" element= {<Studio/>} />
                <Route path="Commons" element= {<Commons/>} />
                <Route path="Help" element= {<Help/>} /> */}
            </Routes>

        </div>
      </div>
    );
  }
  export default Kanbas;