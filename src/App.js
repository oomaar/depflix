import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen, SigninScreen, SignupScreen, BrowseScreen } from "./screens";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/signin" component={SigninScreen} />
      <Route exact path="/signup" component={SignupScreen} />
      <Route exact path="/browse" component={BrowseScreen} />
    </Router>
  );
}

export default App;
