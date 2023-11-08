import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Badge,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import { GetComplains } from "./service/ComplainService";
import NewComplainModal from "./componet/NewComplainModal";
import UpdateComplainModal from "./componet/UpdateComplainModal";
import ViewComplainModal from "./componet/ViewComplainModal";

const Complain = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    GetComplains()
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row>
                  <div className="col">
                    <h3 className="mb-0 ">Complain Details</h3>
                  </div>
                  <div className="col d-flex justify-content-end">
                    <NewComplainModal />
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
                        <ViewComplainModal complain={complain} />
                        <UpdateComplainModal complain={complain} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Complain;
