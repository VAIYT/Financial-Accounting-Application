import {
  Button,
  Card,
  Col,
  Container,
  Input,
  Row,
  Spacer,
} from "@nextui-org/react";
import { Default } from "../layouts/Default";

export const Users = () => {
  return (
    <Default>
      <Container gap={1}>
        <Card>
          <Card.Header>Куда деньги потратил?</Card.Header>
          <Card.Body>
            <Row>
              <Col span={2}>
                <Input label="На что!?" placeholder="пиши пиши"></Input>
              </Col>
            </Row>
            <Spacer />
            <Row>
              <Col span={2}>
                <Input label="Скока!??!" placeholder="пиши пиши"></Input>
              </Col>
            </Row>
            <Spacer />
            <Row>
              <Col span={2}>
                
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </Default>
  );
};
