import { Carousel } from "react-bootstrap";
import classes from "./Carousel.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import proj1 from "/proj1.jpg";
import proj2 from "/proj2.jpg";
import proj3 from "/proj3.jpg";

function ProjectCarousel() {
  return (
    <Carousel fade interval={4000} className={classes.carousel}>
      <Carousel.Item>
        <img className="d-block w-100" src={proj1} alt="Project 1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={proj2} alt="Project 2" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={proj3} alt="Project 3" />
      </Carousel.Item>
    </Carousel>
  );
}

export default ProjectCarousel;
