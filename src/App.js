// Importing components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
// Importing styles
import GlobalStyles from "./components/GlobalStyles";
// Router
import { Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
