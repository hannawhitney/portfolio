import { Link, useLoaderData } from "react-router-dom";
import classes from "./PortfolioDetail.module.css";

function PortfolioDetailPage() {
  const project = useLoaderData();

  if (!project) return <p>Project not found.</p>;

  return (
    <div className={classes.portfolioDetail}>
      <h1>{project.name}</h1>
      <img src={project.image} alt={`${project.name} preview`} />
      <p>{project.description}</p>
      <Link
        to={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.visitLink}
      >
        Visit the site
      </Link>
    </div>
  );
}

export default PortfolioDetailPage;
