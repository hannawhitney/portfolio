import selfie from "../assets/selfie.png";
import classes from "./About.module.css";
function AboutPage() {
  return (
    <section className={classes.home}>
      <div className={classes.intro}>
        <img className={classes.selfie} src={selfie} alt="Hanna Whitney" />
        <h1 className={classes.name}>Hanna Whitney</h1>
      </div>
      <div className={classes.blurbContainer}>
        <p className={classes.blurb}>
          My journey in computer science started with curiosity and turned into
          a full academic path — completing both Associate and Associate of
          Science degrees before earning my Bachelor’s, graduating{" "}
          <strong>summa cum laude</strong>.
        </p>

        <p className={classes.blurb}>
          I thrive on creating software that’s as intuitive as it is functional.
          When I’m not coding, I’m usually reading, going for a run, or finding
          new foods to try.
        </p>

        <p className={classes.blurb}>
          I currently live near Salt Lake City, but I’m excited to explore
          opportunities wherever they may take me.
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
