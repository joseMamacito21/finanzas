import React from 'react';
import { Card, CardTitle, CardBody , CardSubtitle, CardText} from 'reactstrap';

import ReasonBody from './ReasonBody';

const FinancialReason = ({ name, firstYear, secondYear, formula, explanation, unidadMedida }) => {
  return(
    <div className="reason">
      <div className="reasonName">
        {name}
      </div>
      <Card>
        <CardBody>
          <CardTitle>{formula}</CardTitle>
          <CardSubtitle>
            <ReasonBody name={name} firstYear={firstYear} secondYear={secondYear} unidadMedida={unidadMedida}/>
          </CardSubtitle>
          <CardText>{explanation}</CardText>
        </CardBody>
      </Card>        
    </div>
  );
}

export default FinancialReason;