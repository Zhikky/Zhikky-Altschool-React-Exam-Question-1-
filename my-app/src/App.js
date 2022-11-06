import "./App.css";
import Homepage from "./Components/homepage";
import { ErrorBoundary } from "./Components/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Homepage />
      </div>
    </ErrorBoundary>
  );
}

export default App;
