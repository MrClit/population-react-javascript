import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import classes from './ChartView.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ChartView({data}) {

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {position: 'top'},
      title: {display: false, text: 'Población por región'}
    },
    tooltip: {
      enabled: true
    }
  };

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [{
      label: 'Population',
      data: data.map(item => item.population),
      backgroundColor: '#1abc9c',
      borderColor: '#1abc9c',
      borderWidth: 1
    }]
  };


  return (
    <div className={classes['chart-container']}>
      <Bar
        options={options}
        data={chartData}
        className={classes['chart-canvas']}
      />
    </div>
  )
}