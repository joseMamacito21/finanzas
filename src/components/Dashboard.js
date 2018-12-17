import React from 'react';
import { Col, Row } from 'reactstrap';

const Dashboard = () => {
  return (
    <Col md={10}>
      <Row >
        <div className="results-container">
          <div className="results">
            <h1 className="display-4 text-center">Resultados y recomendaciones</h1>
            <p>
              En general los números reflejan que la empresa está muy estable debido a que sus
              ventas aumentan en más de 200 millones, esto le ha permitido buscar formas de
              seguir creciendo. Evidentemente, al buscar esa expansión, incurre en gastos
              generales y esto afecta en cierta medida las utilidades netas entre períodos,
              incluso provocando que estas sean menores con respecto al año 2016.
              Sin embargo siempre es posible mejorar y por ello brindamos las siguientes recomendaciones:
            </p>
            <div className="recomendacion">
              <span className="check">&#10004;</span>La negociación con los proveedores será la clave para que recursos financieros continúen estables. Los proveedores son aliados estratégicos que necesitan entender la situación en la que se encuentra la empresa, así que deben utilizar su mejor poder de persuasión para que los proveedores acepten las condiciones que les quieren proponer.
            </div>
            <div className="recomendacion">
              <span className="check">&#10004;</span>Prestar atención a los gastos, los cuales no dejan de ser un rubro significativo, aunque vemos que la empresa analizada se encuentra con un aumento del 2016 al 2017, es justificable debido a que se mantiene con obras de ampliación.
            </div> 
            <div className="recomendacion">
              <span className="check">&#10004;</span>El Capital se mantiene durante los dos periodos, podrían buscar inversionistas que ayuden a aumentarlo.

            </div>               
          </div>          
        </div>
      </Row>
    </Col>
  )
};

export default Dashboard;