import Header from "./Components/Header";
import AllClient from "./Components/AllClients";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleClient from "../src/pages/SingleCLiente"
// import './App.css';

function App() {
  return (
    <div className="App">
        <Header />

      <BrowserRouter>
          <Routes>
            <Route  exact path="/" element={<AllClient />} />
            <Route  path="/single-client/:id" element={<SingleClient btnText="Anotar +" />} />
          </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
