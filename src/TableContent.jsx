import React from "react";
import {
  Tabs,
  Tab,
  Nav,
  Row,
  Col,
  Table,
  Pagination,
  Form,
} from "react-bootstrap";

import "./tablecontent.css";
import setL from "./images/set-l.svg";
import viewIcon from "./images/view.svg";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const tableData1 = [
  {
    id: 1,
    name: "Asset Management",
    expand: false,
    items: [
      {
        id: "checkBox_1",
        isFavourites: true,
        Modules: "AS03 - Asset: Depreciation Areas",
        Status: "In Production",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_2",
        isFavourites: true,
        Modules: "AS03 - Asset: Master Data",
        Status: "Ready",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_3",
        isFavourites: true,
        Modules: "AS03 - Asset: Change Documents",
        Status: "In Production",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_5",
        isFavourites: true,
        Modules: "S_ALR_87011990 - Asset History Sheet",
        Status: "In Testing",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_6",
        isFavourites: true,
        Modules: "S_ALR_87011994 - Asset Balances",
        Status: "In Testing",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_7",
        isFavourites: true,
        Modules: "S_ALR_87012050 - Asset Acquisitions",
        Status: "In Testing",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_8",
        isFavourites: true,
        Modules: "S_ALR_87012062 - Asset Retirements",
        Status: "In Production",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_9",
        isFavourites: true,
        Modules: "S_ALR_87012054 - Intracompany Asset Transfers",
        Status: "Ready",
        Aktion: "Offnen",
      },
    ],
  },
  {
    id: 2,
    name: "Customers",
    expand: false,
    items: [
      {
        id: "checkBox_10",
        isFavourites: false,
        Modules: "FBLSN - Customer Line Items",
        Status: "In Testing",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_11",
        isFavourites: false,
        Modules: "FD1ON - Customer Balances",
        Status: "Ready",
        Aktion: "Offnen",
      },
      {
        id: "checkBox_12",
        isFavourites: false,
        Modules: "SE16 - Customer Payment Notifications",
        Status: "In Testing",
        Aktion: "Offnen",
      },
    ],
  },
];
function TableContent() {
  const [tableData, setTableData] = React.useState(tableData1);

  const tableAccordion = (id) => {
    // const getId = tableData.findIndex((e) => e.id === id);
    // if (getId !== -1) {
    //   tableData[getId].expand = !tableData[getId].expand;
    //   setTableData([...tableData]);
    // }
    tableData[id].expand = !tableData[id].expand;
    setTableData([...tableData]);
  };
  const favouriteCheck = (dataIndex, itmeIndex) => {
    tableData[dataIndex].items[itmeIndex].isFavourites =
      !tableData[dataIndex].items[itmeIndex].isFavourites;
    setTableData([...tableData]);
  };
  return (
    <div>
      <h4>
        SAP-PR23 <span>(Old Production System-BMG)</span>
      </h4>
      <div className="table-content rounded bg-white">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col className="table-main d-flex align-items-center justify-content-between ">
              <Nav variant="pills" className="flex-row">
                <Nav.Item>
                  <Nav.Link eventKey="first">Views</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tables</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Belegarchiv</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="forth">Files</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="set-view">
                <a
                  href="http://www."
                  className="d-flex flex-column align-items-center justify-content-between text-decoration-none"
                >
                  <img src={viewIcon} alt="" />
                  <span>Table View</span>
                </a>
                <a
                  href="http://www."
                  className="d-flex flex-column align-items-center justify-content-between text-decoration-none"
                >
                  <img src={setL} alt="" />
                  <span>Manage Custom View</span>
                </a>
              </div>
            </Col>
            <hr className="mb-4" />
            <Tab.Content>
              <Tab.Pane eventKey="first" className="view-table">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-2 "
                >
                  <Tab eventKey="MainView" title="Main View">
                    <div className="tab-search">
                      <input type="text" placeholder="Search" />
                    </div>
                    <Table
                      id="dtBasicExample"
                      className="table-check table table-bordered table-sm mb-0"
                      cellSpacing="0"
                      width="100%"
                    >
                      <thead>
                        <tr>
                          <th width="10%" className="th-sm">
                            Favourites
                          </th>
                          <th className="th-sm">Modules</th>
                          <th width="14%" className="th-sm">
                            Status
                          </th>
                          <th width="14%" className="th-sm">
                            Aktion
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((data, dataIndex) => {
                          return (
                            <>
                              <tr key={dataIndex}>
                                <td></td>
                                <td
                                  className="ac-title"
                                  onClick={() => {
                                    tableAccordion(dataIndex);
                                  }}
                                >
                                  {data.expand ? (
                                    <FiChevronDown />
                                  ) : (
                                    <FiChevronRight />
                                  )}
                                  {data.name}
                                </td>
                                <td></td>
                                <td></td>
                              </tr>
                              {data.expand
                                ? data.items.map((item, itmeIndex) => {
                                    return (
                                      <tr key={itmeIndex}>
                                        <td align="center">
                                          <input
                                            checked={item.isFavourites}
                                            onChange={(e) =>
                                              favouriteCheck(
                                                dataIndex,
                                                itmeIndex
                                              )
                                            }
                                            type="checkbox"
                                            id={item.id}
                                          />
                                          <label htmlFor={item.id}></label>
                                        </td>
                                        <td>{item.Modules}</td>
                                        <td>{item.Status}</td>
                                        <td>{item.Aktion}</td>
                                      </tr>
                                    );
                                  })
                                : ""}
                            </>
                          );
                        })}
                      </tbody>
                    </Table>
                  </Tab>

                  <Tab eventKey="LastView" title="Last View">
                    <h1>hello2</h1>
                  </Tab>
                  <Tab eventKey="Favourites" title="Favourites">
                    <h1>hello3</h1>
                  </Tab>
                </Tabs>
              </Tab.Pane>
              <div className="table-footer d-flex align-items-center justify-content-between">
                <div>
                  <span>View: 33</span>
                </div>
                <Pagination className="m-0">
                  <Pagination.Prev />
                  {/* <Pagination.Ellipsis /> */}
                  <Pagination.Item>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Next />
                </Pagination>
              </div>
              <Tab.Pane eventKey="second">
                <h1>hello</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h1>hello</h1>
              </Tab.Pane>
              <Tab.Pane eventKey="forth">
                <h1>hello</h1>
              </Tab.Pane>
            </Tab.Content>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default TableContent;
