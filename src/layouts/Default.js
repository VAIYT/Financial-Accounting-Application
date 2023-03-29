import { Link } from "react-router-dom";

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
      {children}
    </div>
  );
};
