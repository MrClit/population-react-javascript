import classes from './Sidebar.module.css'
import {useQuery} from "@tanstack/react-query";
import {fetchPopulation} from "../utils/http.js";
import {NavLink} from "react-router-dom";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";

export default function Sidebar() {
  const {data, isLoading, isError} = useQuery({
    queryKey: ['population'],
    queryFn: fetchPopulation
  })

  let content;

  if (isLoading) {
    content = <LoadingIndicator/>;
  }

  if (isError) {
    content = <ErrorBlock title="An error ocurred" message="Failed to fetch population" />
  }

  if (data && !isError) {
    const continents = data.continentsList;
    content = continents.map(continent => (
      <li key={continent}>
        <NavLink
          to={`/region/${continent}`}
          className={({isActive}) => isActive ? classes.active : undefined}
        >
          {continent}
        </NavLink>
      </li>
    ))
  }

  return (
    <div className={classes.sidebar}>
      <h3>Population Viewer</h3>
      <ul>
        <li>
          <NavLink
            to={'/region/global'}
            className={({isActive}) => isActive ? classes.active : undefined}
          >
            🌍 Global
          </NavLink>
        </li>
        {content}
      </ul>
    </div>
  )
}