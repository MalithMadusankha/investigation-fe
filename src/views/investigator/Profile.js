// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  Table,
  Badge,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import { useEffect, useState } from "react";
import { GetUserByID } from "./service/InvestigatorService";
import UpdateInvestigatorModal from "./componet/UpdateInvestigatorModal";
import ViewComplainModal from "views/complain/componet/ViewComplainModal";
import UpdateComplainModal from "views/complain/componet/UpdateComplainModal";
import { FindComplainByInvestigator } from "views/complain/service/ComplainService";

const Profile = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const [userProfile, setUserProfile] = useState({});
  const [data, setData] = useState([]);
  const FetchUser = async (id) => {
    console.log(id);
    const user = await GetUserByID(id);
    console.log(user.data);
    setUserProfile(user.data);
    SetValues(user.data);
  };

  const FetchInvestigations = async (id) => {
    console.log(id);
    const investigations = await FindComplainByInvestigator(id);
    console.log(investigations.data);
    setData(investigations.data);
  };

  const SetValues = (u) => {
    setFirst_name(u?.first_name);
    setLast_name(u?.last_name);
    setEmail(u?.email);
    setGender(u?.gender);
    setAddress(u?.address);
    setMobile(u?.mobile);
  };
  useEffect(() => {
    const userString = localStorage.getItem("user");
    const user = JSON.parse(userString);
    setUserProfile(user);
    SetValues(user);
    FetchUser(user._id);
    FetchInvestigations(user._id);
  }, []);

  return (
    <>
      <UserHeader user={userProfile} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/team-1-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardBody className="pt-0 pt-md-4 mt-8">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className=" text-success mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <UpdateInvestigatorModal user={userProfile} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                First Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-username"
                                type="text"
                                value={first_name}
                                onChange={(e) => setFirst_name(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-first-name"
                              >
                                Last Name
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-last-name"
                                type="text"
                                value={last_name}
                                onChange={(e) => setLast_name(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Gender
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-last-name"
                                type="select"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                              >
                                <option value={1}>Male</option>
                                <option value={0}>Female</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                      <hr className="my-4" />
                      {/* Address */}
                      <h6 className="heading-small text-muted mb-4">
                        Contact information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-address"
                              >
                                Address
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                id="input-address"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-city"
                              >
                                Mobile
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-mobile"
                                type="text"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="order-xl-2 mb-5 mb-xl-0">
            <Card className="card-profile shadow">
              <CardBody className="pt-0 pt-md-4">
                <Row className="justify-content-center">
                  <h2 className=" text-success mb-3">Investigation History</h2>
                  <Table className="align-items-center table-flush" responsive>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Complain</th>
                        <th scope="col">Location</th>
                        <th scope="col">Status</th>
                        <th scope="col">Complain Date</th>
                        <th scope="col" />
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((complain, index) => (
                        <tr key={index}>
                          <td>{complain.complain}</td>
                          <td>{complain.location}</td>
                          <td>
                            {complain.investigation_status === "NEW" ? (
                              <Badge color="info">
                                {complain.investigation_status}
                              </Badge>
                            ) : null}
                            {complain.investigation_status ===
                            "INVESTIGATING" ? (
                              <Badge color="warning">
                                {complain.investigation_status}
                              </Badge>
                            ) : null}
                            {complain.investigation_status === "COMPLETED" ? (
                              <Badge color="success">
                                {complain.investigation_status}
                              </Badge>
                            ) : null}
                          </td>
                          <td>{complain.complain_on.slice(0, 10)}</td>
                          <td className="text-right">
                            <ViewComplainModal complain={complain} />
                            <UpdateComplainModal complain={complain} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
