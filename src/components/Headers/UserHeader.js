// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = ({ user }) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "300px",
          backgroundImage: "url(" + require("../../assets/img/bg3.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-2" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col>
              <h1 className="display-2 text-white">
                Hello {user?.first_name + " " + user?.last_name}
              </h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
