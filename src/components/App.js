import '../styles/App.css';
import StarMatch from "./StarMatch";
import ErrorBoundary from "./ErrorBoundry";

const App = () => (
  <ErrorBoundary>
    <StarMatch />
  </ErrorBoundary>
);

export default App;
