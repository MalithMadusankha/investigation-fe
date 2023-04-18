import React, { useState } from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Form,
  Alert,
} from "reactstrap";
import { CreateEmail } from "views/email/service/EmailService";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setIsLoading(true);
    // submit form data to server or perform other actions
    let emailObj = {
      email,
      description,
      name,
      reply: "",
    };
    console.log("emailObj", emailObj);
    try {
      const res = await CreateEmail(emailObj);
      console.log("res", res);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
      console.log("error", error);
      setErrMsg(error.response.data.message);
    }
  };

  return (
    <>
      <main>
        <div className="position-relative">
          {/* shape Hero */}
          <section className="section section-lg section-shaped pb-250">
            <Container className="py-lg-md d-flex">
              <div className="col px-0">
                <Row>
                  <Col lg="6">
                    <h1 className="display-3 text-white">
                      HelaSecu Hospital
                      <span>We Will Look After You</span>
                    </h1>
                    <p className="lead text-white">
                      Joint Commission International is the world’s leader in
                      healthcare accreditation and the author and evaluator of
                      the most rigorous international standards in quality and
                      patient safety.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </section>
          {/* 1st Hero Variation */}
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Download Argon
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap 4
                          that includes the most important components and
                          features.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            design
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            system
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            creative
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Build Something
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap 4
                          that includes the most important components and
                          features.
                        </p>
                        <div>
                          <Badge color="success" pill className="mr-1">
                            business
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            vision
                          </Badge>
                          <Badge color="success" pill className="mr-1">
                            success
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="success"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Prepare Launch
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap 4
                          that includes the most important components and
                          features.
                        </p>
                        <div>
                          <Badge color="warning" pill className="mr-1">
                            marketing
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            product
                          </Badge>
                          <Badge color="warning" pill className="mr-1">
                            launch
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="warning"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section bg-secondary mt-8">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src={require("assets/img/theme/img-1-1200x1000.jpg")}
                    top
                  />
                  <blockquote className="card-blockquote">
                    <h4 className="display-3 font-weight-bold text-white">
                      Design System
                    </h4>
                    <p className="lead text-italic text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Our customers</h3>
                  <p className="lead">
                    Don't let your uses guess by attaching tooltips and popoves
                    to any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    A beautiful UI Kit for impactful websites
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg">
          <Container>
            <Row className="justify-content-center text-center mb-lg mt-8">
              <Col lg="8">
                <h2 className="display-3 text-white">The amazing Team</h2>
                <p className="lead text-light">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record maximum.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-1-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1 text-white">
                        Ryan Tompson
                      </span>
                      <small className="h6 text-light">Web Developer</small>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-2-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1 text-white">
                        Romina Hadid
                      </span>
                      <small className="h6 text-light">
                        Marketing Strategist
                      </small>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-3-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1 text-white">
                        Alexander Smith
                      </span>
                      <small className="h6 text-light">UI/UX Designer</small>
                    </h5>
                  </div>
                </div>
              </Col>
              <Col className="mb-5 mb-lg-0" lg="3" md="6">
                <div className="px-4">
                  <img
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("assets/img/theme/team-4-800x800.jpg")}
                    style={{ width: "200px" }}
                  />
                  <div className="pt-4 text-center">
                    <h5 className="title">
                      <span className="d-block mb-1 text-white">John Doe</span>
                      <small className="h6 text-light">Founder and CEO</small>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="section section-lg pt-lg-0 section-contact-us">
          <Container>
            <Row className="justify-content-center mt-8">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow p-2">
                  {/* Alerts */}
                  {isLoading ? (
                    <Alert color="primary">
                      {" "}
                      Loading . . . <i className="ni ni-email-83" /> . . . .
                    </Alert>
                  ) : isSuccess ? (
                    <Alert color="success">
                      {" "}
                      Email Sent.. . . . <i className="ni ni-email-83" />
                    </Alert>
                  ) : (
                    isError && (
                      <div>
                        {errMsg.map((err, index) => (
                          <Row key={index}>
                            <Alert color="danger"> {err}</Alert>
                          </Row>
                        ))}
                      </div>
                    )
                  )}
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Want to contact us?</h4>
                    <p className="mt-0">Do uou have any problem.</p>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
}

export default Home;
