import React from 'react';
import { Table } from 'reactstrap';

const EstadoResultadosHorizontal = () => {
  return(
    <div className="m-auto financialLayout">
      <div className="text-center pt-3">
        <p>LLANTAS ABC .</p>
        <p>ESTADO DE RESULTADOS</p>						
        <p>AL 30 DE SETIEMBRE DEL 2017</p>						
      </div>
      <Table>
        <thead className="thead-dark">
          <tr>
            <th>Cuenta</th>
            <th>2016</th>
            <th>2017</th>
            <th>ABSOLUTA</th>
            <th>RELATIVA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>VENTAS</td>
            <td>2,624,160,859.00</td>
            <td>2,838,334,015.00</td>
            <td>214,173,156.00</td>
            <td>8.16%</td>
          </tr>
          <tr>
            <td>COSTO DE VENTAS</td>
            <td>1,993,070,614.00</td>
            <td>2,107,588,383.00</td>
            <td>114,517,769.00</td>
            <td>5.75%</td>
          </tr>
          <tr>
            <td>UTILIDAD BRUTA</td>
            <td className="totalLine">631,090,245.00</td>
            <td className="totalLine">730,745,632.00</td>
            <td>99,655,387.00</td>
            <td>15.79%</td>
          </tr>
          <tr>
            <td>GASTOS GENERALES</td>
            <td>336,717,959.00</td>
            <td>496,011,099.00</td>
            <td>159,293,140.00</td>
            <td>47.31%</td>
          </tr>
          <tr>
            <td>UTILIDAD DE OPERACIÓN</td>
            <td className="totalLine">294,372,286.00</td>
            <td className="totalLine">234,734,533.00</td>
            <td>(59,637,753.00)</td>
            <td>(20.26%)</td>
          </tr>
          <tr>
            <td>GASTOS FINANCIEROS</td>
            <td>16,181,469.00</td>
            <td>35,076,038.00</td>
            <td>18,894,569.00</td>
            <td>116.77%</td>
          </tr>
          <tr>
            <td>IMPUESTO SOBRE LA RENTA</td>
            <td>6,039,980.00</td>
            <td>12,558,875.00</td>
            <td>6,518,895.00</td>
            <td>107.93%</td>
          </tr>
          <tr>
            <td>UTILIDAD (PERDIDA) NETA</td>
            <td className="totalLine">₡272,150,837.00</td>
            <td className="totalLine">₡187,099,620.00</td>
            <td>(85,051,217.00)</td>
            <td>(31.25%)</td>
          </tr>            
        </tbody>
      </Table>
    </div>
  );
};

export default EstadoResultadosHorizontal;