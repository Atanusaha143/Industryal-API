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
  function activeProfile() {
    localStorage.setItem("profileFlag", 1);
    history.push("/product/user/profile");
  }
  function industryal() {
    localStorage.removeItem("profileFlag");
    history.push("/product");
  }
  return (
    <>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Nav>
              <Nav.Link
                onClick={industryal}
                style={{ fontSize: "150%", fontWeight: "200px" }}
              >
                Industryal
              </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link onClick={activeProfile}>
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
