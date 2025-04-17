import { Link } from "react-router-dom";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-4" role="contentinfo">
      <Container>
        <span>
          Developed with{" "}
          <Link to="https://react.dev/" target="_blank">
            React
          </Link>
          ,{" "}
          <Link to="https://wordpress.org/" target="_blank">
            WordPress
          </Link>
          ,{" "}
          <Link to="https://tailwindcss.com/" target="_blank">
            Tailwind
          </Link>{" "}
          and{" "}
          <Link to="https://vite.dev/" target="_blank">
            Vite
          </Link>
        </span>
      </Container>
    </footer>
  );
};

export default Footer;
