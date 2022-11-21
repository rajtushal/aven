import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Dropdown } from "react-bootstrap";
import { IoSettingsSharp } from "react-icons/io5";
import { AiFillCaretDown } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import logo from "./images/logo.png";
import userPic from "./images/user.png";
import logout from "./images/logout.svg";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <Navbar expand="lg">
        <Container fluid className="d-flex ">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <div className="main-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
                <NavDropdown title="Dashboard" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Applications" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Data Retention" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Export" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tutorials" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="nav-user d-flex align-items-center gap-3">
            <Dropdown>
              <Dropdown.Toggle
                id="settings-quick"
                className="bg-transparent border-0"
              >
                <IoSettingsSharp className="d-flex align-items-center" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.74218 9.44526C10.2592 9.44526 12.2996 7.46217 12.2996 5.0159C12.2996 2.56964 10.2592 0.586548 7.74218 0.586548C5.22522 0.586548 3.18481 2.56964 3.18481 5.0159C3.18481 7.46217 5.22522 9.44526 7.74218 9.44526Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M1 16.0001C1 12.3816 4.01897 9.44739 7.7421 9.44739C11.4652 9.44739 14.4842 12.3816 14.4842 16.0001"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                  </svg>
                  <span>Benutzerverwaltung</span>
                  <BsChevronRight className="ms-auto" />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <svg
                    width="22"
                    height="11"
                    viewBox="0 0 22 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.9849 6.49906C12.6102 6.49906 13.9277 5.21209 13.9277 3.62453C13.9277 2.03697 12.6102 0.75 10.9849 0.75C9.35956 0.75 8.04199 2.03697 8.04199 3.62453C8.04199 5.21209 9.35956 6.49906 10.9849 6.49906Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M6.63113 10.7529C6.63113 8.40456 8.5806 6.50037 10.9848 6.50037C13.3889 6.50037 15.3384 8.40456 15.3384 10.7529"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M17.1611 7.00184C18.5949 7.00184 19.7572 5.86648 19.7572 4.46595C19.7572 3.06541 18.5949 1.93005 17.1611 1.93005C15.7272 1.93005 14.5649 3.06541 14.5649 4.46595C14.5649 5.86648 15.7272 7.00184 17.1611 7.00184Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M14.3824 8.16481C15.0811 7.44845 16.0679 7.00171 17.1613 7.00171C19.2814 7.00171 21.0002 8.68058 21.0002 10.7515"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M4.83742 7.00184C6.27125 7.00184 7.4336 5.86648 7.4336 4.46595C7.4336 3.06541 6.27125 1.93005 4.83742 1.93005C3.40359 1.93005 2.24124 3.06541 2.24124 4.46595C2.24124 5.86648 3.40359 7.00184 4.83742 7.00184Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M7.59112 8.13745C6.89374 7.43673 5.91767 7.00171 4.83893 7.00171C2.71878 7.00171 1 8.68058 1 10.7515"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                  </svg>

                  <span>Benutzerverwaltung</span>
                  <BsChevronRight className="ms-auto" />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.18344 6.58027C12.1507 6.58027 15.3669 5.40016 15.3669 3.94443C15.3669 2.4887 12.1507 1.30859 8.18344 1.30859C4.21614 1.30859 1 2.4887 1 3.94443C1 5.40016 4.21614 6.58027 8.18344 6.58027Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M15.3669 7.33252C15.3669 8.78955 12.15 9.96836 8.18344 9.96836C4.21687 9.96836 1 8.78955 1 7.33252"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M15.3669 11.038C15.3669 12.495 12.15 13.6738 8.18344 13.6738C4.21687 13.6738 1 12.4929 1 11.038"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M15.3669 3.92383V14.3641C15.3669 15.8212 12.15 17 8.18344 17C4.21687 17 1 15.8212 1 14.3641V3.92383"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                  </svg>

                  <span>Benutzerverwaltung</span>
                  <BsChevronRight className="ms-auto" />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.26994 15.7576C8.53721 15.7576 8.80661 15.7639 9.07388 15.7555C9.30052 15.7471 9.4288 15.6039 9.42667 15.3807C9.42667 15.2965 9.41384 15.2102 9.40315 15.1259C9.33473 14.509 9.26845 13.8921 9.19361 13.2773C9.17864 13.151 9.21285 13.071 9.31121 12.9867C9.64903 12.6941 9.82008 12.3214 9.82863 11.875C9.8436 11.1781 9.3839 10.5591 8.7104 10.3633C8.02834 10.1654 7.30993 10.4328 6.93362 11.0244C6.56159 11.6118 6.61504 12.4035 7.11536 12.8773C7.33559 13.0857 7.33986 13.2794 7.30565 13.5363C7.2244 14.13 7.1624 14.7259 7.10467 15.3218C7.07687 15.6081 7.21585 15.7513 7.5045 15.7576C7.75893 15.7639 8.01123 15.7576 8.26567 15.7576H8.26994Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M2.50096 7.04068H14.0276C14.855 7.04068 15.5285 7.70181 15.5285 8.51875V17.4482C15.5285 18.3052 14.8229 19 13.9527 19H2.57579C1.70558 19 1 18.3052 1 17.4482V8.51664C1 7.70181 1.67137 7.03857 2.50096 7.03857V7.04068Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M3.77777 7.04072V5.41947C3.77777 2.97708 5.78546 1 8.26354 1C10.7416 1 12.7493 2.97708 12.7493 5.41737V7.05545"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                  </svg>

                  <span>Benutzerverwaltung</span>
                  <BsChevronRight className="ms-auto" />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.025 7.35625C1.20625 6.95625 1.50625 6.78125 1.94375 6.8125C2.275 6.8375 2.6125 6.8125 2.9375 6.8125C3.15625 6.34375 3.36875 5.8875 3.6 5.38125C3.3875 5.175 3.15 4.95 2.9125 4.71875C2.50625 4.3125 2.5 3.925 2.9125 3.51875C3.23125 3.2 3.5375 2.8875 3.8625 2.56875C4.225 2.20625 4.60625 2.20625 4.975 2.56875C5.21875 2.8 5.45625 3.0375 5.6875 3.275C5.7625 3.35 5.825 3.375 5.9375 3.325C6.3125 3.16875 6.6875 3.01875 7.08125 2.8875C7.20625 2.84375 7.2375 2.78125 7.2375 2.66875V1.775C7.225 1.29375 7.51875 1 7.98125 1H9.4375C9.89375 1 10.1812 1.2875 10.2 1.75625V2.78125C10.2 2.85 10.2625 2.95 10.3187 2.975C10.7375 3.16875 11.1687 3.3625 11.6312 3.5625C11.85 3.3375 12.0875 3.0875 12.3375 2.8375C12.6937 2.48125 13.1 2.48125 13.4625 2.8375C13.7937 3.16875 14.1312 3.5 14.4562 3.83125C14.8 4.1875 14.8 4.575 14.4562 4.93125C14.1875 5.2 13.9 5.46875 13.6437 5.70625C13.8375 6.225 14.0187 6.7 14.2062 7.19375H15.1937C15.7375 7.19375 16.0125 7.475 16.0125 8.025V9.3875C16.0125 9.9 15.725 10.1687 15.2187 10.1812H14.2187C14.1562 10.1812 14.0625 10.2312 14.0375 10.2937C13.8437 10.7187 13.6625 11.1438 13.4625 11.5813C13.675 11.8 13.9062 12.0438 14.1375 12.275C14.5312 12.6688 14.5312 13.0875 14.1375 13.4812C13.8125 13.8062 13.4812 14.1313 13.15 14.4563C12.825 14.775 12.425 14.775 12.1062 14.4563C11.8562 14.2125 11.6187 13.9563 11.3625 13.7188C11.3187 13.675 11.2187 13.6438 11.1562 13.6688C10.7187 13.8375 10.2875 14.0187 9.81875 14.2062V15.1875C9.81875 15.7125 9.53125 16 9.00625 16H7.61875C7.1125 16 6.8375 15.7125 6.825 15.2062V14.225C6.825 14.1062 6.7875 14.05 6.66875 14C6.29375 13.8437 5.93125 13.65 5.55625 13.4937C5.49375 13.4687 5.38125 13.4813 5.3375 13.525C5.1125 13.7313 4.90625 13.9562 4.6875 14.175C4.34375 14.5125 3.90625 14.525 3.55625 14.175C3.21875 13.8437 2.88125 13.5063 2.55 13.1563C2.2125 12.8063 2.225 12.4187 2.5625 12.0687C2.80625 11.825 3.05 11.5875 3.2875 11.3375C3.33125 11.2938 3.35 11.1813 3.325 11.1188C3.1875 10.725 3.025 10.3437 2.8875 9.95C2.85 9.83125 2.7875 9.80625 2.68125 9.80625C2.425 9.80625 2.175 9.79375 1.91875 9.80625C1.46875 9.8375 1.15625 9.65625 1 9.225V7.35625H1.00625H1.025Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M8.53143 11.4876C10.1877 11.4876 11.5064 10.1626 11.5064 8.5001C11.5064 6.8376 10.1752 5.50635 8.50642 5.5126C6.83767 5.5126 5.52517 6.8376 5.53142 8.51884C5.53142 10.1688 6.86892 11.4876 8.51892 11.4813H8.52517L8.53143 11.4876Z"
                      stroke="#2166A5"
                      stroke-miterlimit="10"
                    />
                  </svg>

                  <span>Benutzerverwaltung</span>
                  <BsChevronRight className="ms-auto" />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="profil-access d-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  id="profile-quick"
                  className="bg-transparent border-0 d-flex justify-content-center align-items-center"
                >
                  <span className="">Bertelsmann</span>
                  <div className="d-flex align-items-center">
                    <img src={userPic} alt="" className="mx-1" />
                    <AiFillCaretDown />
                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <img src={userPic} alt="" />
                    <span>Emanuel Böminghaus</span>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <svg
                      width="21"
                      height="12"
                      viewBox="0 0 21 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.04604 5.93831C1.43245 5.56275 1.80735 5.17065 2.21021 4.81329C3.51908 3.65187 4.95456 2.68568 6.56105 1.9842C8.12478 1.30092 9.751 0.928669 11.466 1.01139C12.1895 1.04613 12.9015 1.1636 13.5987 1.36213C14.8566 1.72114 15.9961 2.3184 17.0517 3.08771C17.9051 3.70978 18.6763 4.42284 19.3883 5.20208C19.6201 5.45521 19.8421 5.71661 20.0707 5.97636C20.046 6.00945 20.0263 6.03427 20.0065 6.05908C18.821 7.47859 17.425 8.64497 15.807 9.5334C14.4175 10.2961 12.941 10.7742 11.3558 10.8851C11.2473 10.8934 11.1388 10.9016 11.0303 10.9116H10.3298C10.3051 10.9066 10.2821 10.9 10.2574 10.8983C9.68358 10.8752 9.1163 10.7974 8.55559 10.6733C7.33387 10.4053 6.19272 9.92716 5.11406 9.29847C3.85123 8.56225 2.7183 7.65396 1.66759 6.63979C1.44396 6.42471 1.22034 6.19971 1 5.98132L1.0444 5.93831H1.04604Z"
                        stroke="#2166A5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.6179 3.10419C11.8199 3.10419 12.9759 3.9463 13.3277 5.1375C13.6961 6.3866 13.2011 7.67375 12.083 8.37027C10.7264 9.21734 8.89797 8.79215 8.0528 7.43221C7.18296 6.0342 7.70914 4.18289 9.18902 3.43012C9.61489 3.21339 10.0654 3.1075 10.6179 3.10254V3.10419Z"
                        stroke="#2166A5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>Benutzerverwaltung</span>
                    <BsChevronRight className="ms-auto" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.79852 5.754C10.001 5.754 12.597 4.79352 12.597 3.60869C12.597 2.42387 10.001 1.46338 6.79852 1.46338C3.59609 1.46338 1 2.42387 1 3.60869C1 4.79352 3.59609 5.754 6.79852 5.754Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M10.8954 7.88241C9.84521 8.26991 8.39908 8.50859 6.79852 8.50859C3.5974 8.50859 1 7.54826 1 6.36328"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M9.68515 11.238C8.83432 11.4178 7.84872 11.5217 6.79852 11.5217C3.5974 11.5217 1 10.5613 1 9.37634"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M6.79852 14.2285C3.5974 14.2285 1 13.2682 1 12.0832V3.5918"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M12.5972 3.5918V6.09653"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M13.8156 12.2517C15.5742 12.2517 16.9999 10.8261 16.9999 9.06745C16.9999 7.30883 15.5742 5.88318 13.8156 5.88318C12.057 5.88318 10.6313 7.30883 10.6313 9.06745C10.6313 10.8261 12.057 12.2517 13.8156 12.2517Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M13.8157 10.3788C14.54 10.3788 15.1271 9.79167 15.1271 9.06744C15.1271 8.34321 14.54 7.7561 13.8157 7.7561C13.0915 7.7561 12.5044 8.34321 12.5044 9.06744C12.5044 9.79167 13.0915 10.3788 13.8157 10.3788Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M10.8117 10.1261L6.68115 14.2286V16.2925H8.50635L8.99775 15.8039H10.1322V14.6751H11.4351V13.5069H12.5808V12.0383"
                        stroke="#2166A5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.51172 14.5654L11.6286 11.3811"
                        stroke="#2166A5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span>Benutzerverwaltung</span>
                    <BsChevronRight className="ms-auto" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.49994 15.9999C12.642 15.9999 15.9999 12.642 15.9999 8.49994C15.9999 4.35784 12.642 1 8.49994 1C4.35784 1 1 4.35784 1 8.49994C1 12.642 4.35784 15.9999 8.49994 15.9999Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M8.50013 12.101C10.4889 12.101 12.1011 10.4888 12.1011 8.50001C12.1011 6.51125 10.4889 4.89905 8.50013 4.89905C6.51138 4.89905 4.89917 6.51125 4.89917 8.50001C4.89917 10.4888 6.51138 12.101 8.50013 12.101Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M10.8877 5.86051L13.6337 3.03296"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M3.18555 13.7934L5.87474 11.0226"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M5.85685 5.93492L3.0293 3.18896"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M13.7898 13.6371L11.019 10.9479"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                    </svg>

                    <span>Benutzerverwaltung</span>
                    <BsChevronRight className="ms-auto" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.282715 10.3193C0.282715 10.3193 7.19007 8.93066 7.9535 2.97241"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M0 2.97241H9.94586"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M2.11401 2.97241C2.11401 2.97241 2.51246 7.66116 8.21232 9.74698"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M4.83276 1L5.74219 2.97253"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M8.35229 14.0001L12.3884 4.79688L16.4246 14.0001"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M9.73608 10.8451H15.0405"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                    </svg>

                    <span>Benutzerverwaltung</span>
                    <BsChevronRight className="ms-auto" />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.32194 15.6439C12.3657 15.6439 15.6439 12.3657 15.6439 8.32194C15.6439 4.27814 12.3657 1 8.32194 1C4.27814 1 1 4.27814 1 8.32194C1 12.3657 4.27814 15.6439 8.32194 15.6439Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M9.10815 7.11963V13.0669"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M9.75439 7.11963H7"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M11.1524 13.0669H7.06763"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M8.47443 5.82336C8.97793 5.82336 9.38611 5.41519 9.38611 4.91168C9.38611 4.40817 8.97793 4 8.47443 4C7.97092 4 7.56274 4.40817 7.56274 4.91168C7.56274 5.41519 7.97092 5.82336 8.47443 5.82336Z"
                        stroke="#2166A5"
                        stroke-miterlimit="10"
                      />
                    </svg>

                    <span>Benutzerverwaltung</span>
                    <BsChevronRight className="ms-auto" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                variant="outline-primary"
                className="bg-transparent border-0 ms-2"
              >
                <img src={logout} alt="" />
              </Button>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
