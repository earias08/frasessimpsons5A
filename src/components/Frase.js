import React from "react";
import Card from "react-bootstrap/Card";

const Frase = (props) => {
  return (
    <Card>
      <Card.Body>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <img src={props.propiedadPersonaje.image} alt={props.propiedadPersonaje.character} />
          </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>{props.propiedadPersonaje.character}</Card.Title>
            <Card.Text>{props.propiedadPersonaje.quote}</Card.Text>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Frase;
