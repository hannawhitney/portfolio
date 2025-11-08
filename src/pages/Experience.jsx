import classes from "./Experience.module.css";

const ExperiencePage = () => {
  return (
    <main className={classes.experiencePage}>
      <h1>Experience</h1>

      <div className={classes.card}>
        <h2 className={classes.title}>
          Research Assistant – Fault Localization
        </h2>
        <h3 className={classes.role}>
          Research Assistant under Dr. Arpit Chrisi
        </h3>
        <ul className={classes.description}>
          <li>
            Assisted in research on fault localization, delta debugging, and
            automatic program reduction.
          </li>
          <li>
            Recreated research algorithms and translated code from Java to C#.
          </li>
          <li>
            Developed programs to track every line of code using unique
            identifiers (GUIDs), enabling precise identification of potential
            bugs.
          </li>
          <li>
            Implemented logic to calculate a Tarantula risk score for each line
            and attempted automated bug removal.
          </li>
        </ul>
        <div className={classes.tech}>
          <strong>Technologies:</strong> Java, C#, Git, Algorithm design,
          Debugging techniques
        </div>
      </div>

      <div className={classes.card}>
        <h2 className={classes.title}>HOA Website Improvement Project</h2>
        <h3 className={classes.role}>Full-Stack Developer / Team Member</h3>
        <ul className={classes.description}>
          <li>
            Collaborated with a real client to enhance and implement new
            features on their Homeowners Association website.
          </li>
          <li>
            Developed and integrated a contact form that sends emails directly
            to the HOA administrator.
          </li>
          <li>
            Implemented a "Work In Kind" hour logging feature, enabling
            residents to log volunteer hours and allowing administrators to
            download annual reports.
          </li>
          <li>
            Gained experience working in a team environment with client
            feedback, prioritizing usability and accessibility.
          </li>
        </ul>
        <div className={classes.tech}>
          <strong>Technologies:</strong> React, JavaScript, HTML, CSS, Git,
          Email integration
        </div>
      </div>
    </main>
  );
};

export default ExperiencePage;
