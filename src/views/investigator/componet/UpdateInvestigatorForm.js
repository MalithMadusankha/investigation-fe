import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
} from "reactstrap";
import { UpdateUser } from "../service/InvestigatorService";

export default function UpdateInvestigatorForm({ user, toggle, setSuccess }) {
  const [first_name, setFirst_name] = useState(user?.first_name);
  const [last_name, setLast_name] = useState(user?.last_name);
  const [gender, setGender] = useState(user?.gender);
  const [address, setAddress] = useState(user?.address);
  const [mobile, setMobile] = useState(user?.mobile);
  const [email, setEmail] = useState(user?.email);

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // submit form data to server or perform other actions
    let obj = {
      first_name,
      last_name,
      email,
      firebase_id: user?.firebase_id,
      gender,
      address,
      mobile,
    };
    console.log(obj);
    try {
      const res = await UpdateUser(obj, user._id);
      console.log("res", res);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      setSuccess(true);
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
      <Form onSubmit={handleSubmit}>
        {/* Alerts */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success"> Investigator Updated</Alert>
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

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="first_name">
                First Name*
              </Label>
              <Input
                type="text"
                name="first_name"
                id="first_name"
                required
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="last_name">
                Last Name*
              </Label>
              <Input
                type="text"
                name="last_name"
                id="last_name"
                required
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Name With Initital & Display Name */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="address">
                Address
              </Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Gender & Date Of Birth */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="gender">
                Gender
              </Label>
              <Input
                type="select"
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value={1}>Male</option>
                <option value={0}>Female</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="mobile">
                Mobile
              </Label>
              <Input
                type="text"
                name="mobile"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Email & Mobile Number */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="email">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <div className="mt-5 d-flex justify-content-end">
          <Button
            className="mx-2"
            color="secondary"
            onClick={() =>
              isError || isSuccess ? window.location.reload() : toggle()
            }
          >
            Cancel
          </Button>
          <Button color="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
