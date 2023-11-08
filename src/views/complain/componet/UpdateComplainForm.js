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
  Table,
} from "reactstrap";
import { UpdateComplain } from "../service/ComplainService";

export default function UpdateComplainForm({
  complainObj,
  toggle,
  setSuccess,
}) {
  // Complainer
  const [name, setName] = useState(complainObj?.complainer?.name);
  const [nic, setNic] = useState(complainObj?.complainer?.nic);
  const [address, setAddress] = useState(complainObj?.complainer?.address);
  const [mobile, setmobile] = useState(complainObj?.complainer?.mobile);

  const [complain, setComplain] = useState(complainObj?.complain);
  const [description, setDescription] = useState(complainObj?.description);
  const [investigation_status, setInvestigation_status] = useState(
    complainObj?.investigation_status
  );
  const [location, setLocation] = useState(complainObj?.location);

  // investigation
  const [date, setDate] = useState("");
  const [avidance, setAvidance] = useState("");
  const [descriptionInvestigate, setDescriptionInvestigate] = useState("");
  const [locationInvestigat, setLocationInvestigat] = useState("");

  const [investigations, setInvestigations] = useState(
    complainObj?.investigations || []
  );

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    const complainer = { name, nic, address, mobile };

    // submit form data to server or perform other actions
    let obj = {
      complain,
      description,
      investigation_status,
      location,
      complainer,
      complain_on: complainObj?.complain_on,
      investigator: complainObj?.investigator,
      investigations,
    };
    try {
      const res = await UpdateComplain(obj, complainObj?._id);
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
          <Alert color="success"> Complain updated</Alert>
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
        <Row className="mb-1">
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

          <Col>
            <FormGroup>
              <Label className="text-primary" for="phone_number">
                Mobile*
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
                Address*
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

        <Row className="mb-1">
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
              <Label className="text-primary" for="status">
                Status*
              </Label>
              <Input
                type="select"
                name="status"
                id="status"
                value={investigation_status}
                onChange={(e) => setInvestigation_status(e.target.value)}
              >
                <option value={"NEW"}>NEW</option>
                <option value={"INVESTIGATING"}>INVESTIGATING</option>
                <option value={"COMPLETED"}>COMPLETED</option>
              </Input>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label className="text-primary" for="location">
                Investigator*
              </Label>
              <Input
                type="location"
                name="location"
                id="location"
                value={
                  complainObj?.investigator?.first_name +
                  " " +
                  complainObj?.investigator?.last_name
                }
                disabled
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="description">
                Description*
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
          <Col>
            <FormGroup>
              <Label className="text-primary" for="location">
                Location*
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
        <Row className="mb-1">
          <Col>
            <h3>Update Lates Status of Complain</h3>
          </Col>
        </Row>

        <Row>
          <Col lg="3">
            <FormGroup>
              <Label className="text-primary" for="complain">
                Investigation Date*
              </Label>
              <Input
                type="date"
                name="complain"
                id="complain"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="avidance">
                Avidance*
              </Label>
              <Input
                type="text"
                name="avidance"
                id="avidance"
                value={avidance}
                onChange={(e) => setAvidance(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label className="text-primary" for="location">
                Location*
              </Label>
              <Input
                type="location"
                name="location"
                id="location"
                value={locationInvestigat}
                onChange={(e) => setLocationInvestigat(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="description">
                Description*
              </Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={descriptionInvestigate}
                onChange={(e) => setDescriptionInvestigate(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col lg="2">
            <Label className="text-dark">Add New Investigation</Label>
            <br />
            <Button
              color="info"
              onClick={() => {
                const userString = localStorage.getItem("user");
                const user = JSON.parse(userString);
                const investigator = {
                  first_name: user?.first_name,
                  last_name: user?.last_name,
                  id: user?._id,
                };

                const investObj = {
                  investigation_on: date,
                  avidance: avidance,
                  description: descriptionInvestigate,
                  location: locationInvestigat,
                  investigator,
                };

                const newArray = [...investigations, investObj];
                setInvestigations(newArray);
              }}
            >
              Add
            </Button>
          </Col>
        </Row>

        <Table className="align-items-center table-flush" responsive>
          <thead className="thead-light">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Avidance</th>
              <th scope="col">Location</th>
              <th scope="col">Desciption</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {investigations?.map((obj, index) => (
              <tr key={index}>
                <td>{obj?.investigation_on}</td>
                <td>{obj?.avidance}</td>
                <td>{obj?.description}</td>
                <td>{obj?.location}</td>
              </tr>
            ))}
          </tbody>
        </Table>

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
