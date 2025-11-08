import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Portfolio"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Portfolio
            </NavLink>{" "}
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Contact
            </NavLink>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
