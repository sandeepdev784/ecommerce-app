import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand className="navbar-brand">
            <Link to='/'>E-Commerce</Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/cart">Cart ({totalItems})</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
