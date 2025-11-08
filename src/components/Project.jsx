import { Link } from "react-router-dom";
import classes from "./Project.module.css";

function ProjectItem(props) {
  return (
    <li className={classes.projectItem}>
      <div className={classes.card}>
        <h3 className={classes.title}>{props.name}</h3>
        <img
          className={classes.image}
          src={props.image}
          alt={`${props.name} preview`}
        />
        <button className={classes.button}>
          <Link className={classes.button} to={props.id}>
            See more
          </Link>
        </button>
      </div>
    </li>
  );
}

export default ProjectItem;
