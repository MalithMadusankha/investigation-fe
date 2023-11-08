// reactstrap components
import { Container } from "reactstrap";
const COVER =
  "https://img.freepik.com/premium-photo/hi-tech-hud-digital-display-holographic-background-motion-graphics-technology-concept_24070-578.jpg?w=1060";
const Header = () => {
  const backgroundStyle = {
    backgroundImage: `url(${COVER})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "50vh",
  };
  return (
    <>
      <div style={backgroundStyle}>
        <Container fluid></Container>
      </div>
    </>
  );
};

export default Header;
