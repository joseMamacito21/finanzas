import React from 'react';
import { Table } from 'reactstrap';

const BalanceSituacionHorizontal = () => {
  return(
    <div className="m-auto financialLayout">
      <div className="text-center pt-3">
        <p>LLANTAS ABC .</p>
        <p>BALANCE DE SITUACION</p>						
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
            <td>ACTIVO CIRCULANTE:</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr> 
          <tr>
            <td>EFECTIVO Y BANCOS</td>
            <td>8,405,605.00</td>
            <td>12,433,252.00</td>
            <td>4,027,647.00</td>
            <td>47.92%</td>
          </tr>
          <tr>
            <td>CUENTAS POR COBRAR</td>
            <td>480,185,590.00</td>
            <td>537,810,972.00</td>
            <td>57,625,382.00</td>
            <td>12%</td>
          </tr>
          <tr>
            <td>INVENTARIOS</td>
            <td>589,430,127.00</td>
            <td>602,357,719.00</td>
            <td>12,927,592.00</td>
            <td>2.19%</td>
          </tr>
          <tr>
            <td>TOTAL ACTIVO CIRCULANTE</td>
            <td>1,078,021,322.00</td>
            <td>1,152,601,943.00</td>
            <td>74,580,621.00</td>
            <td>6.92%</td>
          </tr>
          <tr>
            <td>ACTIVO NO CIRCULANTE:</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>PROPIEDAD, PLANTA Y EQUIPO NETO</td>
            <td>359,440,990.00</td>
            <td>338,343,916.00</td>
            <td>(21,097,074.00)</td>
            <td>(5.87%)</td>
          </tr>
          <tr>
            <td>OBRAS EN CONSTRUCCION</td>
            <td>11,142,524.00</td>
            <td>54,850,494.00</td>
            <td>43,707,970.00</td>
            <td>392.26%</td>
          </tr>
          <tr>
            <td>TOTAL ACTIVO NO CIRCULANTE</td>
            <td>370,583,514.00</td>
            <td>393,194,410.00</td>
            <td>22,610,896.00</td>
            <td>6.1%</td>
          </tr>  
          <tr>
            <td>TOTAL ACTIVO</td>
            <td className="totalLine">1,448,604,836.00</td>
            <td className="totalLine">1,545,796,353.00</td>
            <td>97,191,517.00</td>
            <td>6.71%</td>
          </tr>  
          <tr>
            <td>PASIVO CIRCULANTE</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>DOCUMENTOS POR PAGAR</td>
            <td>394,175,355.00</td>
            <td>337,274,593.00</td>
            <td>(56,900,762.00)</td>
            <td>(14.44%)</td>
          </tr>
          <tr>
            <td>CUENTAS POR PAGAR</td>
            <td>107,735,123.00</td>
            <td>94,727,782.00</td>
            <td>(13,007,341.00)</td>
            <td>(12.07%)</td>
          </tr>
          <tr>
            <td>TOTAL PASIVO CIRCULANTE</td>
            <td>501,910,478.00</td>
            <td>432,002,375.00</td>
            <td>(69,908,103.00)</td>
            <td>(13.93%)</td>
          </tr>
          <tr>
            <td>TOTAL PASIVO</td>
            <td>501,910,478.00</td>
            <td>432,002,375.00</td>
            <td>(69,908,103.00)</td>
            <td>(13.93%)</td>
          </tr>
          <tr>
            <td>PATRIMONIO</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>  
          <tr>
            <td>CAPITAL SOCIAL</td>
            <td>24,600,000.00</td>
            <td>24,600,000.00</td>
            <td>0.00</td>
            <td>0%</td>
          </tr> 
           
          <tr>
            <td>UTILIDADES ACUMULADAS</td>
            <td>649,943,521.00</td>
            <td>902,094,358.00</td>
            <td>252,150,837.00</td>
            <td>38.8%</td>
          </tr>  
          <tr>
            <td>UTILIDAD (PERDIDA) DEL PERIODO</td>
            <td>272,150,837.00</td>
            <td>187,099,620.00</td>
            <td>(85,051,217.00)</td>
            <td>(31.25%)</td>
          </tr> 
          <tr>
            <td>TOTAL PATRIMONIO</td>
            <td>946,694,358.00</td>
            <td>1,113,793,978.00</td>
            <td>167,099,620.00</td>
            <td>17.65%</td>
          </tr> 
          <tr>
            <td>TOTAL PASIVO MAS PATRIMONIO</td>
            <td className="totalLine">1,448,604,836.00</td>
            <td className="totalLine">1,545,796,353.00</td>
            <td>97,191,517.00</td>
            <td>6.71%</td>
          </tr>     
        </tbody>
      </Table>
    </div>
  );
};

export default BalanceSituacionHorizontal;