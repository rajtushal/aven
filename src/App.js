import Header from "./Header";
import "./general.css";
import MainContent from "./MainContent";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Header />
                <MainContent />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
