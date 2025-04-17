import { Link } from "react-router-dom";

type ButtonProps = {
  children: React.ReactNode;
  to: string;
  icon?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, to, icon }) => {
  return (
    <Link to={to} className="button">
      {icon && <span className="icon">{icon}</span>}
      {children}
    </Link>
  );
};

export default Button;
