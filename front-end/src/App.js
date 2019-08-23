import React from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Questions from './pages/Questions';
import GLobalState from './components/context/GlobalState';

const App = () => {

  return (
    <div className="App">
      <Route>
        {({ history }) =>  (
          <GLobalState history={history}>
            <ToastContainer />
            <Header />
            <Container className="py-5">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/questions" component={Questions} />
              <Route exact path="/register" component={Register} />
            </Container>
        </GLobalState>
        )}
        </Route>
    </div>
  );
}

export default App;
