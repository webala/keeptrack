/** @format */

import "./App.css";
import Hello from "./Hello";
import ProjectsPage from "./projects/ProjectsPage";

function App() {
     return (
          <div className="container">
               {/* <ProjectsPage /> */}
               <Hello name={`Daniel`} enthusiasmLevel={2}/>
          </div>
     );
}

export default App;
