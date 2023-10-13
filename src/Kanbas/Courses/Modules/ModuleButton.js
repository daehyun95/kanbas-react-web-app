import "./index.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {AiOutlineCheckCircle} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs";


function ModuleButton() {
    return(
        <div className="mt-3">
          <div className="d-grid gap-1 d-flex justify-content-end mb-3">
            <button type="button" className="btn btn-secondary btn-sm">Collapse All</button>
            <button type="button" className="btn btn-secondary btn-sm">View Progress</button>
            <div className="dropdown">
              <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <AiOutlineCheckCircle className="me-1"/>Publish All
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Publish All</a></li>
                <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
                <li><a className="dropdown-item" href="#">Unpublish</a></li>
              </ul>
            </div>
            <button type="button" className="btn btn-danger btn-sm">Module</button>
            <button type="button" className="btn btn-secondary btn-sm">
                <BsThreeDotsVertical/>
            </button>
          </div>
          <hr style={{width:'90vw'}}/>
        </div>
    )
}
export default ModuleButton