import { Button, Card, Col, Container, Grid, Input, Row, Spacer, Text, User } from "@nextui-org/react";
import { Link } from "react-router-dom";
import styles from "../styles/defaultLayout.module.css";
import profileImage from '../images/profile.jpg'
export const Default = ({ children }) => {
  return (
    <Container>
    <Row gap={1} css={{minHeight: '100vh'}}>
    <Col span>
      <header>
        <ul className={styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li><Link>Profile</Link></li>
          <li><Link>Profile</Link></li>
          <li><Link>Profile</Link></li>
        </ul>
      </header>
      </Col>
      <Col>
        <Grid xs={2}>
          <Row>
              <Text h2>Main Dashboard</Text>
                  <Card css={{minWidth: '500px'}} >
                      <Row css={{alignItems: 'center'}}>
                      <Input placeholder="Search.." css={{minWidth: '200px'}}/>
                      <Button.Group>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                      </Button.Group>
                      <User src={profileImage}/>
                      </Row>
                  </Card>
          </Row>
        </Grid>
      <Card css={{minHeight: '90vh'}}>
        <Card.Header>Profile</Card.Header>
          <Card.Body>
            {children}
          </Card.Body>
      </Card>
      </Col>
    </Row>
    </Container>

  );
};
