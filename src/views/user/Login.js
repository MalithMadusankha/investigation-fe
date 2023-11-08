// reactstrap components
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Alert,
  Row,
} from "reactstrap";
import { SignIn } from "./userService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      SignIn(email, password);

      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        if (userString || user) {
          history.push("/inv/index");
        } else {
          history.push("/admin/index");
        }
      }, 2000);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
      console.log("error ", error);
      setErrMsage(error.response.data.message);
    }
  };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-translucent-success shadow border-0 mt-5">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center  mb-5">
              <h1 className="text-white"> Sign In </h1>
            </div>
            {/* Alerts */}
            {isLoading ? (
              <Alert color="primary"> Loading . . .</Alert>
            ) : isSuccess ? (
              <Alert color="success"> Successfully Login</Alert>
            ) : (
              isError && (
                <div>
                  {errMsage.map((err, index) => (
                    <Row key={index}>
                      <Alert color="danger"> {err}</Alert>
                    </Row>
                  ))}
                </div>
              )
            )}
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <Row className=" mt-5">
                <Col>
                  <Link className="btn btn-success" to="/auth/register">
                    Regiter
                  </Link>
                </Col>
                <Col>
                  <Button color="primary" type="submit">
                    Sign in
                  </Button>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
