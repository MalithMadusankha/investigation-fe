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

export default function ViewComplainForm({ complainObj, toggle, setSuccess }) {
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

  const [investigations, setInvestigations] = useState(
    complainObj?.investigations || []
  );

  return (
    <>
      <Form>
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
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
                disabled
                type="location"
                name="location"
                id="location"
                value={
                  complainObj?.investigator?.first_name +
                  " " +
                  complainObj?.investigator?.last_name
                }
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
                disabled
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
                disabled
                type="location"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Row className="mb-1">
          <Col>
            <h3 className="text-center">Investigation History</h3>
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
      </Form>
    </>
  );
}
