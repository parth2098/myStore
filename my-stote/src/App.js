import "./App.css";
import Header from "./components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Groceries from "./components/Groceries";

function App() {
  return (
    <div className="app text-center">
      <Header />
      {/* nav */}
      <Navbar />
      <Groceries />
      {/* <Login /> */}
    </div>
  );
}

export default App;
