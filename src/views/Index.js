import { useEffect, useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Badge,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import { GetComplains } from "./complain/service/ComplainService";
import ViewComplainModal from "./complain/componet/ViewComplainModal";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartData, setChartData] = useState();
  const [data, setData] = useState([]);
  const [pieData, setPieData] = useState([]);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
  };

  const FetchData = async () => {
    const res = await GetComplains();
    let complains = res.data;
    setData(complains);
    let complainsArray = [0, 0, 0, 0, 0, 0];
    let stausArray = [0, 0, 0];

    for (let i = 0; i < complains.length; i++) {
      if (complains[i].complain_on.slice(5, 7) === "01") complainsArray[0] += 1;
      if (complains[i].complain_on.slice(5, 7) === "02") complainsArray[1] += 1;
      if (complains[i].complain_on.slice(5, 7) === "03") complainsArray[2] += 1;
      if (complains[i].complain_on.slice(5, 7) === "04") complainsArray[3] += 1;
      if (complains[i].complain_on.slice(5, 7) === "05") complainsArray[4] += 1;
      if (complains[i].complain_on.slice(5, 7) === "06") complainsArray[5] += 1;

      if (complains[i].investigation_status === "NEW") stausArray[0] += 1;
      if (complains[i].investigation_status === "INVESTIGATING")
        stausArray[1] += 1;
      if (complains[i].investigation_status === "COMPLETED") stausArray[2] += 1;
    }
    setChartData(complainsArray);
    setPieData(stausArray);
  };

  const getColorForRange = (value) => {
    if (value >= 1 && value <= 3) {
      return "bg-gradient-warning";
    } else if (value >= 4 && value <= 6) {
      return "bg-gradient-primary";
    } else if (value >= 7 && value <= 9) {
      return "bg-gradient-info";
    } else if (value === 10) {
      return "bg-gradient-green";
    } else {
      return "bg-gradient-default"; // Add a default color if needed
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="7">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Total Complains</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={{
                      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                      datasets: [
                        {
                          label: "Performance",
                          data: chartData, // values
                        },
                      ],
                    }}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="mb-5 mb-xl-0" xl="5">
            <Card className=" shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="mb-0">Investigations</h2>
                  </div>
                  <div className="col"></div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Pie
                    data={{
                      labels: ["NEW", "INVESTIGATING", "COMPLETED"],
                      datasets: [
                        {
                          data: pieData,
                          backgroundColor: ["#66ffff", "#ff9900", "#33cc33"],
                          hoverBackgroundColor: [
                            "#66ffff",
                            "#ff9900",
                            "#33cc33",
                          ],
                        },
                      ],
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Investigtion History</h3>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Complain</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col">Complain Date</th>
                    <th scope="col">Progress</th>
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
                        {complain.investigation_status === "INVESTIGATING" ? (
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
                        <Progress
                          max="10"
                          value={complain?.investigations?.length}
                          barClassName={getColorForRange(
                            complain?.investigations?.length
                          )}
                        />
                      </td>
                      <td className="text-right">
                        <ViewComplainModal complain={complain} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
