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
import { PredictCity } from "../service/PredictService";

const COLOMBO = [
  "colombo 1",
  "colombo 2",
  "colombo 3",
  "colombo 4",
  "colombo 5",
  "colombo 6",
  "colombo 7",
  "colombo 8",
  "colombo 9",
  "colombo 19",
  "colombo 11",
  "colombo 12",
  "colombo 13",
  "colombo 14",
  "colombo 15",
];

const GAMPAHA = [
  "kadwatha",
  "kiribathgoda",
  "gampaha",
  "wattala",
  "ja-ela",
  "nittambuwa",
  "peliyagoda",
  "kelaniya",
  "biyagama",
  "kiridiwela",
  "kadana",
];

export default function PredictFraudForm() {
  // Complainer

  const [district, setDistrict] = useState("colombo");
  const [city, setCity] = useState("colombo 1");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [cities, setCities] = useState(COLOMBO);
  const [predictValue, setPredictValue] = useState(0);

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFraud = async (event) => {
    event.preventDefault();
    setPredictValue(0);
    setIsLoading(true);
    const obj = { provience: "western", district, city, month, year };

    try {
      const res = await PredictCity(obj);
      console.log("res", res.data);
      setPredictValue(res.data[0]);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
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
      <Form onSubmit={handleFraud}>
        {/* full name */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success">
            <h3 className="text-white text-center">
              Success, Number of frauds : {predictValue?.toFixed(0)}
            </h3>
          </Alert>
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
            <h4>Find, Number of fruad can happen in a city</h4>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="district">
                District*
              </Label>
              <Input
                type="select"
                name="district"
                id="district"
                required
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  if (e.target.value === "colombo") {
                    setCities(COLOMBO);
                  } else {
                    setCities(GAMPAHA);
                  }
                }}
              >
                <option value="colombo">Colombo</option>
                <option value="gampaha">Gampaha</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="city">
                City*
              </Label>
              <Input
                type="select"
                name="city"
                id="city"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((c, i) => (
                  <option value={c} key={i}>
                    {c}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="month">
                Month
              </Label>
              <Input
                type="select"
                name="month"
                id="month"
                required
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="jan">January</option>
                <option value="feb">February</option>
                <option value="mar">March</option>
                <option value="apr">April</option>
                <option value="may">May</option>
                <option value="jun">June</option>
                <option value="jul">July</option>
                <option value="aug">August</option>
                <option value="sep">September</option>
                <option value="oct">October</option>
                <option value="nov">November</option>
                <option value="dec">December</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="year">
                Year
              </Label>
              <Input
                type="text"
                name="select"
                required
                id="year"
                maxLength={4}
                minLength={4}
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <div className="my-3 d-flex justify-content-end">
          <Button
            className="mx-2"
            color="secondary"
            onClick={() => {
              setDistrict("");
              setCity("");
              setMonth("");
              setYear("");
            }}
          >
            Clear
          </Button>
          <Button color="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
