import { Link } from "react-router-dom";
import styles from "../styles/defaultLayout.module.css";
console.log(styles);
export const Default = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </header>
      <div className={styles.container}>{children}</div>
    </div>
  );
};
