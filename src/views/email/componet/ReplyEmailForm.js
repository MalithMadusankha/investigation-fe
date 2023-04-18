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
  InputGroup,
} from "reactstrap";
import { UpdateEmail } from "../service/EmailService";

export default function ReplyEmailForm({ email, toggle, setSuccess }) {
  const [reply, setReply] = useState(email?.reply || "");
  const [respond, setRespond] = useState(null);
  const [errMsage, setErrMsage] = useState([]);
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(false);
    setIsError(false);
    setIsLoading(true);

    // submit form data to server or perform other actions

    let emailObj = {
      email: email.email,
      description: email.description,
      name: email?.name || "",
      reply,
    };

    try {
      const res = await UpdateEmail(emailObj, email.id, file);
      console.log("res", res);
      setRespond(res);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      setSuccess(true);
    } catch (error) {
      setIsSuccess(false);
      setIsLoading(false);
      setIsError(true);
      console.log("error ddd", error);
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
          <Alert color="success">
            <h4 className="text-white">
              {respond.send?.isSent.message} {respond.send?.sensitive.message}{" "}
              {respond.send?.sensitive.status === 1
                ? "So please send this password to email recivier."
                : null}
            </h4>
            {respond.send?.sensitive.status === 1 ? (
              <InputGroup className="mt--3 center w-25">
                <Input
                  className="text-white bg-translucent-dark border-0 text-center font-weight-bold display-2"
                  value={respond.send.password}
                  readOnly
                />
                <button
                  type="button"
                  className="text-white bg-translucent-dark border-0 pr-3 rounded-right"
                  onClick={() => {
                    navigator.clipboard.writeText(respond.send.password);
                    setIsCopy(true);
                    setTimeout(() => {
                      setIsCopy(false);
                    }, 2500);
                  }}
                >
                  {isCopy ? (
                    "COPIED"
                  ) : (
                    <i className="ni ni-ungroup display-4 bg-bg-translucent-success" />
                  )}
                </button>
              </InputGroup>
            ) : null}
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

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="name">
                Name
              </Label>
              <Input
                type="text"
                name="name"
                id="name"
                disabled
                required
                value={email.name}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="email">
                Email
              </Label>
              <Input
                type="text"
                name="email"
                id="email"
                disabled
                required
                value={email.email}
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
                disabled
                value={email.description}
                onChange={(e) => setReply(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="nic">
                Reply *
              </Label>
              <Input
                type="textarea"
                name="nic"
                id="nic"
                placeholder="Type your reply here ..."
                required
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Label className="text-primary">PDF files</Label>
          </Col>{" "}
        </Row>
        <Row className="px-3">
          <Col>
            <FormGroup>
              <Input
                type="file"
                id="exampleFile"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <label htmlFor="exampleFile" className="custom-file-label">
                {file?.name || "Choose file"}
              </label>
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
            Reply
          </Button>
        </div>
      </Form>
    </>
  );
}
