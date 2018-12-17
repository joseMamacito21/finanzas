import React from 'react';
import financialReasons from './financialReasons';
import FinancialReasonLayout from './FinancialReasonLayout';
import { Row, Col } from 'reactstrap';

const renderFinancialReason = financialReasons.map(({ type, reasons }) => {
  return (
    <FinancialReasonLayout key={type} type={type} reasons={reasons} />
  );
});

const FinancialReasonContainer = () => {
  return(
    <Row>
      <Col md={12}>
        {renderFinancialReason}
      </Col>
    </Row>
  )
}

export default FinancialReasonContainer;