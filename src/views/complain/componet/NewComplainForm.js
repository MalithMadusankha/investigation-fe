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
import { CreateComplain } from "../service/ComplainService";

export default function NewComplainForm({ toggle, setSuccess }) {
  // Complainer
  const [name, setName] = useState("");
  const [nic, setNic] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setmobile] = useState("");

  const [complain, setComplain] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    setIsLoading(true);
    const complainer = { name, nic, address, mobile };
    const investigator = {
      first_name: user?.first_name,
      last_name: user?.last_name,
      id: user?._id,
    };
    // submit form data to server or perform other actions
    let obj = {
      complain,
      description,
      investigation_status: "NEW",
      location,
      complainer,
      complain_on: new Date(),
      investigator,
    };
    try {
      const res = await CreateComplain(obj);
      console.error("res", res);
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
        {/* full name */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success"> Complain Created</Alert>
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
        <Row className="mb-3">
          <Col>
            <h3>Complainer Details</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="name">
                Name*
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="nic">
                NIC*
              </Label>
              <Input
                type="text"
                name="nic"
                id="nic"
                required
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="phone_number">
                Mobile
              </Label>
              <Input
                type="text"
                name="select"
                id="age"
                value={mobile}
                onChange={(e) => setmobile(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="address">
                Address
              </Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="No 2, Gall Rd, Colombo 03"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row className="mb-3">
          <Col>
            <h3>Complain Details</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="complain">
                Complain*
              </Label>
              <Input
                type="text"
                name="complain"
                id="complain"
                required
                value={complain}
                onChange={(e) => setComplain(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="location">
                Location
              </Label>
              <Input
                type="location"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="description">
                Description
              </Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
