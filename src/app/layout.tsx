// Style imports
import "./globals.css";
// this ensures that the icon CSS is loaded immediately before attempting to render icons
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

// Components imports
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Button from 'react-bootstrap/Button';

// Client components
import LateralMenu from "../components/lateral-menu";

// Font import
import { Inclusive_Sans } from 'next/font/google'
const inclusiveSans = Inclusive_Sans({
  variable: "--font-inclusive-sans",
  subsets: ['latin']
})

// Metadata
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Content Tracker",
  description: "A small project that allow you to track your content consumming habbits!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inclusiveSans.variable}`} data-bs-theme="light">
      <body>
        <Container fluid>
          <Row className="border-bottom">
            <Col className="p-0">
              <Navbar className="justify-content-between align-items-center p-3">
                <NavbarBrand href="/">
                  <img
                    alt="Icône du logiciel ContentTracker, représentant un livre ouvert"
                    src="/icons/content-tracker-logo.svg"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                  />{' '}
                  <h2 className="d-inline ms-2 mb-0">ContentTracker</h2>
                </NavbarBrand>
                <Button variant="primary" className="bold">Traquer du contenu</Button>
              </Navbar>
            </Col>
          </Row>
          <Row className="min-vh-100">
            <Col lg="2" className="border-end p-3">
              <LateralMenu />
            </Col>
            <Col className="p-3">
              <main>
                {children}
              </main>
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
