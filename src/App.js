import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
    <div className="mt-3">
      <Counter title="Profile" value={1} image="images/profile.jpg"  />
    </div>
  );
}

export default App;
