import React, { useEffect} from 'react';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import http from './services/httpService';
import Register from './pages/Register';
import Header from './components/Header';


function App() {

  useEffect( () => {

    (async() => {
      const { data: { questions } } = await http.get('http://localhost:3001/api/quesitons');
      console.log(questions);
    })();

  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Container>
    </div>
  );
}

export default App;
