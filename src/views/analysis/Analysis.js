import { Card, CardHeader, Container, Row, Col } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import PredictFraudForm from "./componet/PredictFraudForm";
import PredictCityForm from "./componet/PredictCityForm";

const Analysis = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <div className="col">
                    <h3 className="mb-0 ">Predictions </h3>
                  </div>
                </Row>
              </CardHeader>
              <Row>
                <Col className="mx-3">
                  <PredictFraudForm />
                </Col>
              </Row>
            </Card>
          </div>
        </Row>
        <Row className="my-5">
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <div className="col"></div>
                </Row>
              </CardHeader>
              <Row>
                <Col className="mx-3">
                  <PredictCityForm />
                </Col>
              </Row>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Analysis;
