import "./App.css";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app text-center">
      <Header />
      {/* nav */}
      <Navbar />
      {/* <Login /> */}
    </div>
  );
}

export default App;
