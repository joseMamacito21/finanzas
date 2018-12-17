import React from 'react';
import { Row, Jumbotron } from 'reactstrap';

const Info = ({ title, description }) => {
  return(
    <Row >
      <Jumbotron>
        <h1 className="display-4">{title}:</h1>
        <p className="">
          {description}
        </p>
      </Jumbotron>
    </Row>
  );
};

export default Info;
 
