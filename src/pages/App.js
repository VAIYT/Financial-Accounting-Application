import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Input,
  Loading,
  Row,
  Spacer,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Default } from "../layouts/Default";

export const App = () => {
  const [spending, setSpending] = useState([]);
  const [type, setType] = useState();
  const [form, setForm] = useState({
    title: "",
    count: "",
  });

  const handleChangeText = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const newSpending = JSON.parse(localStorage.getItem("spending"));
    if (newSpending) {
      setSpending(newSpending);
    }
  }, []);

  const handleSubmit = () => {
    setSpending([...spending, form]);
    localStorage.setItem("spending", JSON.stringify([...spending, form]));
    setForm({
      title: "",
      count: "",
    });
  };

  const handleDeleteItem = (title) => {
    const newSpendingItems = spending.filter((item) => item.title != title);
    setSpending(newSpendingItems);
    localStorage.setItem("spending", JSON.stringify(newSpendingItems));
  };

  return (
    <Default>
      <Row>
        <Col>
          <Button onClick={() => setType("доход")}>Добавить доход</Button>
          <Spacer />
          <Button onClick={() => setType("расход")}>Добавить расход</Button>
        </Col>
      </Row>
      {type === "расход" ? (
        <Container gap={1}>
          <Card>
            <Card.Header>Добавить расход</Card.Header>
            <Card.Body>
              <Row>
                <Col span={2}>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChangeText}
                    width="100%"
                    label="Тип траты"
                  />
                </Col>
              </Row>
              <Spacer />
              <Row>
                <Col span={2}>
                  <Input
                    name="count"
                    value={form.count}
                    onChange={handleChangeText}
                    width="100%"
                    label="Сумма"
                  />
                </Col>
              </Row>

              <Row>
                <Col span={2} justify="center">
                  <Button onClick={handleSubmit}>Добавить</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row wrap="wrap" gap={1} css={{ rowGap: "$8", marginTop: "$10" }}>
            {spending.map((item) => (
              <Col span={6} onClick={() => handleDeleteItem(item.title)}>
                <Card>
                  <Card.Header>{item.title}</Card.Header>
                  <Card.Body>Стоимость - {item.count} </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <Container>dasdasds</Container>
      )}
    </Default>
  );
};
