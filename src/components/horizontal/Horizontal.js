import React from 'react';
import { Row, Col, Alert } from 'reactstrap';

import BalanceSituacionHorizontal from './BalanceSituacionHorizontal';
import EstadoResultadosHorizontal from './EstadoResultadosHorizontal';

const Horizontal = () => {
  return (
    <Row>
      <Col md={12}>
        <Alert className="text-right" color="dark">
          Nota: Las cifras estan representadas en colones (₡)
          <br />
          Nota: Las cifras en medio de parentesis significan cifras negativas
        </Alert>
        <BalanceSituacionHorizontal />
        <EstadoResultadosHorizontal />
      </Col>
    </Row>
  )
};

export default Horizontal;