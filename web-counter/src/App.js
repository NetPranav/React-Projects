import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Homepage';

function App() {
  return (
    <>
    <Navbar title="Pranav Dubey" aboutText = "About"/>
    <div className="container mt-3">
        {/* Word Counter Title */}
        <h1 className="display-4 fw-bold text-dark">Word Counter</h1>
    <Content />
    </div>
    </>
  );
}

export default App;
