// routes
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// components
import ForgotPassword from './components/authorizations/ForgotPassword';
import Login from './components/authorizations/Login';
import CreateLink from './components/links/CreateLink';
import LinkDetail from './components/links/LinkDetail';
import LinkList from './components/links/LinkList';
import SearchLinks from './components/links/SearchLinks';

import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
      </div>
      <div className="router-container">
        <Switch>
          <Route exact path="/" render={()=> <Redirect to="/new/1"/>} />
          <Route path="/create" component={CreateLink} />
          <Route path="/search" component={SearchLinks} />
          <Route path="/top" component={LinkList} />
          <Route path="/new/:page" component={LinkList} />
          <Route path="/login" component={Login} />
          <Route path="/forgot" component={ForgotPassword} />
          <Route path="/link/:linkID" component={LinkDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
