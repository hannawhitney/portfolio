import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import coffee from "../assets/coffee.jpg";
import ProjectCarousel from "../components/Carousel";

function HomePage() {
  return (
    <main className={classes.home}>
      <section className={classes.hero}>
        <img src={coffee} alt="Coffee background" />
        <div className={classes.heroContent}>
          <h1>Hi, I’m Hanna Whitney</h1>
          <p>
            A software engineer passionate about creating clean, intuitive, and
            purposeful software.
          </p>
          <Link className={classes.btn} to="/experience">
            View My Work
          </Link>
        </div>
      </section>

      <section className={classes.aboutPreview}>
        <h2>About Me</h2>
        <p>
          I’m a recent Computer Science graduate who loves bringing ideas to
          life through code. I’m driven by curiosity, collaboration, and the
          satisfaction of solving real-world problems.
        </p>
        <Link to="/about" className={classes.btnAlt}>
          Learn More
        </Link>
      </section>

      <section className={classes.carouselSection}>
        <h2>Recent Projects</h2>
        <ProjectCarousel />
        <Link to="/portfolio" className={classes.btnAlt}>
          View More Projects
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
