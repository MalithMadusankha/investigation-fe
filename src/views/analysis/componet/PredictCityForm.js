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
import { PredictCity, PredictMax } from "../service/PredictService";

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

export default function PredictCityForm() {
  // Complainer

  const [district, setDistrict] = useState("colombo");
  const [city, setCity] = useState("colombo 1");
  const [month, setMonth] = useState("jan");
  const [year, setYear] = useState("");

  const [cities, setCities] = useState(COLOMBO);
  const [predictValue, setPredictValue] = useState("");

  const [errMsage, setErrMsage] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleFraud = async (event) => {
    event.preventDefault();
    setPredictValue("");
    setIsLoading(true);
    const obj = { provience: "western", district, city, month, year };

    try {
      const res = await PredictMax(obj);
      console.log("res", res.data);
      setPredictValue(res.data);
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
              Success, Maximum Number of frauds are happening : {predictValue}
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
            <h4>Find, Maximum Number of fruad can happening city</h4>
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
