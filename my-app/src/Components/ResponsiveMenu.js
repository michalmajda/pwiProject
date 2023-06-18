import Container from './../../node_modules/react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll as scroll } from 'react-scroll';
function ResponsiveMenu() {
    const { t, i18n } = useTranslation();
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">NiceFurniture</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">{t('Home')}</Nav.Link>
                <Nav.Link href="#products"><Link to="section1" smooth={true} duration={500}>{t('Products')}</Link></Nav.Link>
                <Nav.Link href="#contact"><Link to="section2" smooth={true} duration={500}>{t('Contact')}</Link></Nav.Link>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={t('Lang')}
                    menuVariant="dark"
                >
              <NavDropdown.Item href="#pl" onClick={() => {i18n.changeLanguage('pl')}}>{t('pl')}</NavDropdown.Item>
              <NavDropdown.Item href="#en" onClick={() => {i18n.changeLanguage('en')}}>{t('en')}</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default ResponsiveMenu;

