import React from 'react';
import { Col,Row, Jumbotron } from 'reactstrap';


const Information = () => {
  return (
    <Col md={10}>
      <Row >
        <Jumbotron className="hero">
          <div className="history">
            <h1 className="display-4">Llantera ABC</h1>
            <p>
            “Llantas ABC. fue fundado en setiembre del 2008, como una empresa dedicada a la
              comercialización de llantas y poco a poco nos hemos ido posicionando en el mercado 
              hasta constituirnos hoy en día como los distribuidores de llantas con mayor variedad
              en todo el país, tanto en diversidad de marcas como en tamaños y diseños.
              Estamos ubicados en la provincia de Alajuela, donde contamos con el servicio de
              montaje, balanceo gratuito y rápido, el servicio de entrega a domicilio en la GAM y
              al resto del país, ofrecemos envío por encomiendas. 
              Nuestra experiencia, solidez y calidad nos permiten ofrecer un respaldo y garantía en 
              nuestros productos por toda la vida útil de los mismos.
              Para nosotros será un verdadero placer contar también con usted como uno de nuestros 
              beneficiarios.”
            </p>
            <p className="cita">
              Gerente General de Llantas ABC  
            </p>  
          </div>          
        </Jumbotron>
      </Row>
    </Col>
  )
};

export default Information;