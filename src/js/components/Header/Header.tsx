import { Link } from "react-router-dom";
import NavMain from "../NavMain/NavMain";
import Container from "../Container/Container";

const Header = () => {
  return (
    <header
      className="bg-gray-975 sticky top-0 right-0 left-0 z-50 py-4 text-sky-100"
      role="banner"
    >
      <Container>
        <h1 className="gradient-secondary text-3xl">
          <Link to="/">Terence Devine</Link>
        </h1>
        <NavMain />
      </Container>
    </header>
  );
};

export default Header;
