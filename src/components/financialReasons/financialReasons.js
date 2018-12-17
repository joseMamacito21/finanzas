const financialReasons = [
  {
    type: "Razones de liquidez",
    reasons: [
      {
        name: "Capital de trabajo",
        formula: "Activo Circulante - Pasivo Circulante",
        firstYear: '576,110,844',
        secondYear: '720,599,568',
        explanation: "Podemos observar que del 2016 al 2017 hubo un incremento de ¢144 488 724,00, lo cual es favorable ya que significa que la empresa esta teniendo más capital para realizar sus actividades con normalidad",
        unidadMedida: 'Moneda (colones)',
      },
      {
        name: "Razón Circulante",
        formula: "Activo Circulante / Pasivo Circulante",
        firstYear: 2.15,
        secondYear: 2.67,
        explanation: "Hay un efecto positivo ya que en el año 2017 aumentaron las veces que el activo circulante cubre al pasivo circulante, comparado al año 2016. Tenemos 0.52 veces de más para pagar las deudas de corto plazo.",
        unidadMedida: 'Veces',
      },
      {
        name: "Prueba de Ácido",
        formula: "(Activo Circulante - Inventarios) / Pasivo Circulante",
        firstYear: 0.97,
        secondYear: 1.27,
        explanation: "Esta razón financiera nos muestra la liquidez real de la empresa, al restarle el inventario al total de activo circulante en el 2017 tenemos 1.27 para solventar las deudas de la empresa. Es un efecto positivo ya que tenemos más cantidad de dinero para hacerle frente a las obligaciones que se tienen con los proveedores o acreedores.",
        unidadMedida: 'Veces',
      }
    ],  
  },
  {
    type: "Razones de actividad",
    reasons: [
      {
        name: "Rotación de inventarios",
        formula: "Costo de ventas / Inventarios",
        firstYear: 3.38,
        secondYear: 3.5,
        explanation: "Vemos que se tiene un efecto favorable, debido a que en el año 2017 se tiene un aumento de 0.12 veces más respecto al año 2016, esto nos demuestra la eficiencia en las ventas que ha tenido la empresa en cuanto al manejo de sus productos.",
        unidadMedida: 'Veces',
      },
      {
        name: "Período Promedio de Inventario",
        formula: "365 / Rotación de inventarios",
        firstYear: 107.94,
        secondYear: 104.32,
        explanation: "En el 2017 la empresa tardo 104,32 días en vender su inventario, a diferencia del 2016 que se tardo 107,94 días, nos demuestra una diferencia positiva ya que significa que el año 2017 se realizaron ventas y se logro rotar el inventario más rápido comparado al año anterior.",
        unidadMedida: 'Dias',
      },
      {
        name: "Rotación de Cuenta por Cobrar",
        formula: "Ventas a credito / Cuenta por Cobrar",
        firstYear: 4.37,
        secondYear: 4.22,
        explanation: "Hay un efecto positivo ya que, en el 2017, se está recuperando los cuentas por cobrar más rápidamente compara al año 2016, lo cual significa que hay eficiencia a la hora de convertir las cuentas por cobrar en efectivo.",
        unidadMedida: 'Veces',
      },
      {
        name: "Periodo promedio de cobro",
        formula: "365 / Rotación de Cuenta por Cobrar",
        firstYear: 83.49,
        secondYear: 86.45,
        explanation: "La empresa tarda en cobrar sus cuentas 83,49 días en el 2016, mientras que en el 2017 tarda 86,45 días. Esto representa un resultado negativo ya que está tardando mucho más en cobrar y esto genera inestabilidad en la empresa ya que está en manos de los deudores.",
        unidadMedida: 'Dias',
      },
      {
        name: "Rotación de Activos Fijos",
        formula: "Ventas / Activos Fijos",
        firstYear: 7.08,
        secondYear: 7.22,
        explanation: "Representa un significado positivo ya que en el 2017 se están obteniendo mayores ingresos equivalentes a la inversión hecha en activos fijos por ende entre mayor sea esta cifra más positiva para la empresa.",
        unidadMedida: 'Veces',
      },
      {
        name: "Rotación de Activos Totales",
        formula: "Ventas / Activos Totales",
        firstYear: 1.81,
        secondYear: 1.84,
        explanation: "En el 2017 se observa que hay un leve efecto positivo por el mejor uso de los activos totales produciendo así una mejoría en la cantidad de ventas tomando como referente los activos totales, comparado al 2016.",
        unidadMedida: 'Veces',
      },
      {
        name: "Rotación de Cuentas por Pagar",
        formula: "Compras / Cuentas por Pagar",
        firstYear: 11.1,
        secondYear: 13.35,
        explanation: "Hay un movimiento positivo para la empresa, en el 2017 aumenta la facilidad de pagar a los proveedores con relación al 2016.",
        unidadMedida: 'Veces',
      },
      {
        name: "Periodo promedio de pago",
        formula: "365 / Rotación de Cuentas por Pagar",
        firstYear: 32.88,
        secondYear: 27.34,
        explanation: "Podemos ver un resultado favorable ya que la empresa cuenta con más liquidez para pagar sus deudas ya que mejoró su tiempo de pago.",
        unidadMedida: 'Dias',
      },
    ],
  },
  {
    type: "Razones de endeudamiento",
    reasons: [
      {
        name: "Razón de endeudamiento",
        formula: "Pasivo Total * 100 / Activo Total",
        firstYear: 35,
        secondYear: 28,
        explanation: "La empresa tiene un resultado favorable con respecto al 2016 ya que pasa de un 35% de endeudamiento a un 28% lo que es positivo ya que tiene más capacidad de pago, así mismo se observa que manejan un perfil bajo de % en deuda lo cual es bueno ya que quiere decir que un 72% de sus activos, más de la mitad se encuentran libres.",
        unidadMedida: 'Procentaje (%)',
      },
    ],
  },
  {
    type: "Razones de rentabilidad",
    reasons: [
      {
        name: "Margen de utilidad neta",
        formula: "Utiliad Neta * 100 / Ventas",
        firstYear: 10,
        secondYear: 7,
        explanation: "Según los porcentajes anteriores, se puede observar un efecto negativo, ya que en el 2017 hubo una disminución de un 3% en comparación al año anterior, lo cual quiere decir que se realizaron más ventas y se obtuvo más utilidad en el periodo 2016 con respecto al 2017.",
        unidadMedida: 'Procentaje (%)',
      },
    ],
  }
]

export default financialReasons;