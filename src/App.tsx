import { Card } from "./components/Card";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card>
        <img
          src="https://1is.awe.by/jpg/full/no_image.jpg"
          className="card-img-top"
          alt="Image"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Card>
    </div>
  );
}

export default App;
