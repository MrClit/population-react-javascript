import classes from './TableView.module.css'

export default function TableView({data}) {
  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>Region</th>
            <th>Population</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            const formattedPopulation = item.population.toLocaleString('es-ES', {
              useGrouping: true,
              maximumFractionDigits: 0,
            })
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{formattedPopulation}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  );
}