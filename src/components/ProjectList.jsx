import Card from "../UI/Card";
import ProjectItem from "./Project";
import classes from "./ProjectList.module.css";

import { useEffect, useState } from "react";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://hannawhitney-portfolio-default-rtdb.firebaseio.com/projects.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong when loading projects!");
        }

        const responseData = await response.json();

        const loadedProjects = [];

        for (const key in responseData) {
          if (key !== "0") {
            loadedProjects.push({
              id: key,
              name: responseData[key].name,
              image: responseData[key].image,
              description: responseData[key].description,
              url: responseData[key].url,
            });
          }
        }
        setProjects(loadedProjects);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError(error.message);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.loading}>
        <p>Loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.projectError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const projectList = projects.map((project) => (
    <Card key={project.id}>
      <ProjectItem
        id={project.id}
        name={project.name}
        image={project.image}
        description={project.description}
        url={project.url}
      />
    </Card>
  ));

  return (
    <section>
      <ul className={classes.projectList}>{projectList}</ul>
    </section>
  );
};

export default ProjectList;
