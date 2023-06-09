import {
  Dropdown,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Input,
  Row,
  Spacer,
  Text,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { BellIcon } from "./icons/BellIcon";
import styles from "../styles/defaultLayout.module.css";
import profileImage from "../images/profile.jpg";
import { MoonIcon } from "./icons/MoonIcon";
import { ExclamationCircleIcon } from "./icons/ExclamationCircleIcon";
// import { Notification } from "react-iconly";
// import BellIcon from "../images/BellIcon.svg"
// import MoonIcon from "../images/MoonIcon.svg"
// import ExclamationCircleIcon from "../images/ExclamationCircleIcon.svg"
export const Default = ({ children }) => {
  return (
    <Container className={styles.container}>
      <Row gap={4} css={{ minWidth: "100%" }}>
        <Col span css={{ padding: "0" }}>
          <header className={styles.header}>
            <ul className={styles.list}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/some">Для Организации</Link>
              </li>
              <li>
                <Link to="/some2">Profile</Link>
              </li>
              <li>
                <Link to="/some3">Profile</Link>
              </li>
            </ul>
          </header>
        </Col>
        <Col>
          <Row
            justify="space-between"
            css={{
              marginTop: "6vh",
              paddingBottom: "2vh",
              paddingRight: "2vh",
            }}
          >
            <Text h1>УЪУЪЪУЪ!НАУШНИКИ ЗАРЯЖАЮТСЯ!УЪУЪЪУЪ</Text>
            <Grid>
              <Card css={{ borderRadius: "30px" }}>
                <Row
                  css={{
                    alignItems: "center",
                    marginLeft: "0.7vh",
                    padding: "$0",
                  }}
                  justify="space-between"
                >
                  <Col span={5}>
                    {/* <input placeholder="Search.." className={styles.input}/>
                     */}
                    <Input placeholder="Search.." rounded />
                  </Col>
                  {/* <button>
                        <img src={BellIcon}></img>
                      </button>
                      <button>
                        <img src={MoonIcon}></img>
                      </button>
                      <button>
                        <img src={ExclamationCircleIcon}></img>
                      </button> */}
                  <Button.Group
                    light
                    auto
                    animated={false}
                    css={{ marginTop: "$6" }}
                  >
                    <Button icon={<BellIcon fill="currentColor" filled />} />
                    <Button icon={<MoonIcon fill="currentColor" filled />} />
                    <Button
                      icon={
                        <ExclamationCircleIcon fill="currentColor" filled />
                      }
                    />
                  </Button.Group>
                  <Dropdown placement="bottom-left">
                    <Dropdown.Trigger>
                      <User
                        size="md"
                        color="secondary"
                        src={profileImage}
                        pointer
                      />
                    </Dropdown.Trigger>
                    <Dropdown.Menu color="secondary">
                      <Dropdown.Item key="settings">My Settings</Dropdown.Item>
                      <Dropdown.Item key="team_settings">
                        Team Settings
                      </Dropdown.Item>
                      <Dropdown.Item key="analytics" withDivider>
                        Analytics
                      </Dropdown.Item>
                      <Dropdown.Item key="system">System</Dropdown.Item>
                      <Dropdown.Item key="configurations">
                        Configurations
                      </Dropdown.Item>
                      <Dropdown.Item key="help_and_feedback" withDivider>
                        Help & Feedback
                      </Dropdown.Item>
                      <Dropdown.Item key="logout" color="error" withDivider>
                        Log Out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Row>
              </Card>
            </Grid>
          </Row>
          <Card css={{ minHeight: "84.5vh" }}>
            <Card.Header></Card.Header>
            <Card.Body>{children}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
