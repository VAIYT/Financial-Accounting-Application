import "../App.css";
import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Input,
  Loading,
  Row,
} from "@nextui-org/react";
import { Default } from "../layouts/Default";

export const App = () => {
  return (
    <Default>
      <Container gap={1}>
        <Card>
          <Card.Header>Добавить трату</Card.Header>
          <Card.Body>
            <Row>
              <Col span={2}>
                <Input width="100%" placeholder="Next UI" />
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Input width="100%" placeholder="Next UI" />
              </Col>
            </Row>
            <Row>
              <Col span={2} justify="center">
                <Button>Добавить</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Default>
  );
};
