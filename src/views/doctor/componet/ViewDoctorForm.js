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

export default function ViewDoctorForm({ doctor, toggle, setSuccess }) {
  const [name, setName] = useState(doctor.name);
  const [specialist, setSpecialist] = useState(doctor.specialist);
  const [email, setEmail] = useState(doctor.email);
  const [phone_number, setPhone_number] = useState(doctor.phone_number);

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <>
      <Form>
        {/* full name */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success"> Doctor Created</Alert>
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
              <Label className="text-primary" for="name">
                Name*
              </Label>
              <Input
                disabled
                type="text"
                name="name"
                id="name"
                placeholder="Nilundi Madusahani"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="nic">
                Specialist*
              </Label>
              <Input
                disabled
                type="text"
                name="nic"
                id="nic"
                placeholder="984585565v"
                required
                value={specialist}
                onChange={(e) => setSpecialist(e.target.value)}
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
                disabled
                type="email"
                name="email"
                id="email"
                placeholder="nilu@gm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="phone_number">
                Mobile Number
              </Label>
              <Input
                disabled
                type="tel"
                name="phone_number"
                id="phone_number"
                placeholder="0770699151"
                value={phone_number}
                onChange={(e) => setPhone_number(e.target.value)}
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
