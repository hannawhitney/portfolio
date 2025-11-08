import { Link } from "react-router-dom";
import ProjectList from "../components/ProjectList";
import classes from "./Portfolio.module.css";

function PortfolioPage() {
  return (
    <>
      <h1 className={classes.title}>Hanna's Portfolio</h1>
      <p className={classes.blurb}>
        A collection of recent projects. For other references, please visit
        Hanna's {" "}
        <Link
          to="https://github.com/hannawhitney"
          className={classes.link}
          target="_blank"
        >
          Github
        </Link>
      </p>
      <ProjectList />
    </>
  );
}

export default PortfolioPage;
