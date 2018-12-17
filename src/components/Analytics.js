import React, { Component } from 'react';
import { Col } from 'reactstrap';

import Info from './common/Info';
import AnalyticsNav from './AnalyticsNav';
import FinancialReasonsContainer from './financialReasons/FinancialReasonsContainer';
import analyticsInfo from './common/analyticsInfo';
import Vertical from './vertical/Vertical';
import Horizontal from './horizontal/Horizontal';

class Analytics extends Component {

  state = {
    tag: 'reasons',
  }
  
  renderContent() {

    switch(this.state.tag) {
      case 'reasons':
        return (
          <div>
            <FinancialReasonsContainer />
          </div>
        );
      case 'vertical':
        return (
          <div>
            <Vertical />
          </div>
        );
      case 'horizontal':
        return (
          <div>
            <Horizontal />
          </div>
        );
      default:
        return;
    }
  } 

  onPress(value) {
    this.setState({
      tag: value
    });
  }

  render() {
    const renderInfo = analyticsInfo.map(({ id, title, description }) => {
      return this.state.tag === id && <Info key={id} title={title} description={description} />
    });

    return(
      <Col md={10}>
        <AnalyticsNav onClick={this.onPress.bind(this)}/>
        {renderInfo}
        {this.renderContent()}
      </Col>
    );
  }
}

export default Analytics;
