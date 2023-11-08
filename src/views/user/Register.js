// reactstrap components
import { useState } from "react";
import { useHistory } from "react-router-dom";
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
} from "reactstrap";
import { SignUp } from "./userService";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [psw, setPsw] = useState("");
  const [rePsw, setRePsw] = useState("");

  const [errMsage, setErrMsage] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (psw !== rePsw) {
      setIsError(true);
      setErrMsage("Password is not match !!!");
      return;
    }
    setIsError(false);
    setErrMsage("");
    setIsLoading(true);
    const user = {
      first_name: name,
      email,
    };
    try {
      console.log("user r", user);
      SignUp(user, psw);
      setTimeout(() => {
        setIsLoading(false);
        setIsError(false);
        setIsSuccess(true);
        history.push("/auth/login");
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
      <Col lg="5" md="8">
        <Card className="bg-translucent-success shadow border-0 mt-5">
          <CardBody className="px-lg-5 py-md-5">
            <div className="text-center text-muted mb-4">
              <h1 className="text-white"> Sign Up </h1>
            </div>
            {/* Alerts */}
            {isLoading ? (
              <Alert color="primary"> Loading . . .</Alert>
            ) : isSuccess ? (
              <Alert color="success"> Successfully Register</Alert>
            ) : (
              isError && <Alert color="danger"> {errMsage}</Alert>
            )}
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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
                    value={psw}
                    onChange={(e) => setPsw(e.target.value)}
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
                    placeholder="Re-Password"
                    type="password"
                    value={rePsw}
                    onChange={(e) => setRePsw(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormGroup>

              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
