import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Dashboard from './Components/dashboard/Dashboard'
import Form from './Components/Form'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/" exact component={Form} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/Form" exact component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
