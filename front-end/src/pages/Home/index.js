import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../components/context/GlobalState';
import { Button } from 'react-bootstrap';
const Home = () => {
  const { currUser } = useContext(GlobalContext);

  return ( 
    <header className="bg-dark p-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-white mt-5 mb-2">ABC Limited</h1>
            <p className="lead mb-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non possimus ab labore provident mollitia. Id assumenda voluptate earum corporis facere quibusdam quisquam iste ipsa cumque unde nisi, totam quas ipsam.</p>
            {
              currUser && (
                <Button as={Link} to="/questions" variant="outline-light" className="outline text-black">Visit Out Questions page</Button>
              )
            }
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Home;