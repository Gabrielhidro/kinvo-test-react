import { Container } from "./styles";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: 'pie'
},
title: {
    text: ''
},
plotOptions: {
    pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
            enabled: false
        },
        showInLegend: true
    }
},
series: [{
    name: 'Profit',
    colorByPoint: true,
    innerSize: '60%',
    data: [{
        name: 'CDB',
        y: 40,
        color: '#9E51BA'
    }, {
        name: 'Tesouro IPCA+',
        y: 50,
        color: "#FF8052"
    }, {
        name: 'LC XP Investimentos',
        y: 10,
        color: "#0DD1E3"
    }]
  }]
}

export function WalletTypesGraphics(){
  return (
    <Container>
      <div className="content">
        <h1>Divisão de Carteiras por Tipos</h1>
        <HighchartsReact className="graphic" highcharts={Highcharts} options={options} />
      </div>
      <div className="content">
        <h1>Divisão de Carteiras por Tipos</h1>
        <HighchartsReact className="graphic" highcharts={Highcharts} options={options} />
      </div>
    </Container>
  )
}