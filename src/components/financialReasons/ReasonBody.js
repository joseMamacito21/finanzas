import React from 'react';
import { Table, Alert } from 'reactstrap';
import Plot from 'react-plotly.js';

const ReasonBody = ({ firstYear, secondYear, name, unidadMedida }) => {
  return (
    <div className="m-auto">
      <Table dark>
        <thead>
          <tr>
            <th>Año</th>
            <th>2016</th>
            <th>2017</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Valor</td>
            <td>{firstYear}</td>
            <td>{secondYear}</td>
          </tr> 
        </tbody>
      </Table>
      <Alert className="text-right" color="dark">
        Unidad de medida: <span style={{ fontWeight: 'bold' }}>{unidadMedida}</span>
      </Alert>
      <Plot className="text-center"
        data={[
          {
            x: ['Año 2016', 'Año 2017'],
            y: [firstYear, secondYear],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: '	#3c3c3c'},
          }
        ]}
        layout={ {width: 610, height: 300, title: name} }
      />
    </div>    
  );
};

export default ReasonBody;