import React, { useEffect, useState } from "react";
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
import { CreatePatient } from "../service/PatientService";

export default function ViewPatientForm({ patient, toggle, setSuccess }) {
  const [name, setName] = useState(patient?.name || "");
  const [nic, setNic] = useState(patient?.nic || "");
  const [address, setAddress] = useState(patient?.address || "");
  const [gender, setGender] = useState("Male");
  const [date_of_birth, setDate_of_birth] = useState(
    patient?.date_of_birth || ""
  );
  const [phone_number, setPhone_number] = useState(patient?.phone_number || "");
  const [vaccine, setVaccine] = useState(patient?.vaccine || "");
  const [email, setEmail] = useState(patient?.email || "");
  const [insurance_date, setInsurance_date] = useState(
    patient?.insurance_date || ""
  );
  const [age, setAge] = useState(patient?.age || "");
  const [weight, setWeight] = useState(patient?.weight || "");
  const [height, setHeight] = useState(patient?.height || "");
  const [file, setFile] = useState(patient?.file || "");

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
          <Alert color="success"> Employee Created</Alert>
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
          <Col>
            <FormGroup>
              <Label className="text-primary" for="nic">
                NIC*
              </Label>
              <Input
                type="text"
                name="nic"
                id="nic"
                placeholder="984585565v"
                required
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Name With Initital & Display Name */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="phone_number">
                Age
              </Label>
              <Input
                type="text"
                name="select"
                id="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="date_of_birth">
                Date Of Birth
              </Label>
              <Input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
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
                placeholder="nilu@gm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="phone_number">
                Mobile Number
              </Label>
              <Input
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
        {/* Vaccine & Employee Type */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="vaccine">
                Vaccine
              </Label>
              <Input
                type="text"
                name="vaccine"
                id="vaccine"
                placeholder="vaccine 2"
                value={vaccine}
                onChange={(e) => setVaccine(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="insurance_date">
                Insurance Date
              </Label>
              <Input
                type="date"
                name="insurance_date"
                id="insurance_date"
                value={insurance_date}
                onChange={(e) => setInsurance_date(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Insurance Date & age */}

        {/* weight */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="weight">
                Weight
              </Label>
              <Input
                type="text"
                name="weight"
                id="weight"
                placeholder="450000"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="height">
                Height
              </Label>
              <Input
                type="text"
                name="height"
                Notes
                id="height"
                placeholder="450000"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <FormGroup>
              <Input type="file" id="exampleFile" />
              <label htmlFor="exampleFile" className="custom-file-label">
                Choose file
              </label>
            </FormGroup>
          </Col>
        </Row> */}

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
