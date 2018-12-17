import React from 'react';
import FinancialReason from './FinancialReason';
import { Row, Col } from 'reactstrap';

const FinancialReasonLayout = ({ type, reasons }) => {
  const renderReasons = reasons.map(({ name, formula, firstYear, secondYear, explanation, unidadMedida }) => {
    return (
      <Col key={name} md={6}>
        <FinancialReason
          name={name}
          formula={formula}
          firstYear={firstYear}
          secondYear={secondYear}
          explanation={explanation}
          unidadMedida={unidadMedida}
        />
      </Col>
    );
  });

  return(
    <div className="financialLayout">
      <h2 className="typeName">{type}</h2>
        <Row>
          {renderReasons}
        </Row>          
    </div>
  );
}

export default FinancialReasonLayout;