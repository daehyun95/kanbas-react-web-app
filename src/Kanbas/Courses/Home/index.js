import ModuleList from "../Modules/ModuleList";
import ModuleButton from "../Modules/ModuleButton";
import SideHome from "./SideHome";

function Home() {
  return (
    <div className="d-flex">
      <div className= "me-4" style={{ minWidth: '450px', flex: '1' }}>
        <ModuleButton />
        <ModuleList />
      </div>
      <div className="mt-3 mx-3">
        <div style={{ width: '250px' }}>
          <SideHome />
        </div>
      </div>
    </div>
  );
}

export default Home;