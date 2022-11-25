import "./App.css";
import Home from "./Components/Home";
import { ErrorBoundary } from "./Components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
     <Home/>
    </ErrorBoundary>
  );
}

export default App;
