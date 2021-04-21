import './App.css';
import Header from './components/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';


function App() {
  return (
    <div className="app text-center">
      <Header />
        <Login />
    </div>
  );
}

export default App;
