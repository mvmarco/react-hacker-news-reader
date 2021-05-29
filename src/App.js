// routes
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// components
import ForgotPassword from './components/authorizations/ForgotPassword';
import Login from './components/authorizations/Login';
import CreateLink from './components/links/CreateLink';
import LinkDetail from './components/links/LinkDetail';
import LinkList from './components/links/LinkList';
import SearchLinks from './components/links/SearchLinks';
import useAuth from "./components/authorizations/useAuth";
import Header from './components/Header';
//firebase
import firebase, {FirebaseContext} from "./firebase";

function App() {
  const user = useAuth();

  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="app-container">
          <Header />
          <div className="route-container">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateLink} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/search" component={SearchLinks} />
              <Route path="/top" component={LinkList} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/link/:linkId" component={LinkDetail} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
