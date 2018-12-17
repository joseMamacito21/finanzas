import React from 'react';
import { Row, Col, Alert } from 'reactstrap';

import BalanceSituacionVertical from './BalanceSituacionVertical';
import EstadoResultadosVertical from './EstadoResultadosVertical';

const Vertical = () => {
  return (
    <Row>
      <Col md={12}>
        <Alert className="text-right" color="dark">
          Nota: Las cifras estan representadas en colones (₡)
          <br />
          Nota: Las cifras en medio de parentesis significan cifras negativas
        </Alert>
        <BalanceSituacionVertical />
        <EstadoResultadosVertical />
      </Col>
    </Row>
  )
};

export default Vertical;