import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/product">Industryal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link href="/product/user/profile">
                  {localStorage.getItem("username")}
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
