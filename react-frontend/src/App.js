import './App.css';
import StartupList from "./pages/StartupList"
import Landing from "./pages/Landing"
import StartupByName from "./pages/StartupByName"
import SearchName from "./pages/SearchName"
import SearchUUID from "./pages/SearchUUID"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <StartupList /> */}
	  <Routes>
		  <Route path="/" element={<Landing/>}></Route>
		  <Route path="/list" element={<StartupList/>}></Route>
		  <Route path="/name" element={<StartupByName/>}></Route>
		  <Route path="/:name" element={<StartupByName/>}></Route>
		  <Route path="/name-search" element={<SearchName/>}></Route>
		  <Route path="/uuid-search" element={<SearchUUID/>}></Route>

	  </Routes>
    </div>
  );
}

export default App;
