import React, { useEffect, useState } from "react";
import { Default } from "../layouts/Default";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Input,
  Modal,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
const initialTitle = "Счетчик:";
export const Some2 = () => {
  const [title, setTitle] = useState(initialTitle);
  const [enter, setEnter] = useState("");
  const [counter, setCouner] = useState(0);
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    let response = fetch("https://api.pexels.com/v1/search?query=people", {
      headers: {
        Authentication:
          "D8vZOq7zxRyDTsDFXKJLXMjFM0XWLugn5vFY14IZQgsQo5bjbxI5YtWH",
      },
    });
  }, []);

  const handleTitleChange = (event) => {
    setEnter(event.target.value);
  };

  function increment() {
    setCouner((prev) => prev + 1);
  }
  function deleted() {
    setCouner((prev) => prev - 1);
  }

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = (event) => {
    if (!enter.length) {
      setErrorMessage("Поле не заполнено");
      return;
    }
    setEnter("");
    setErrorMessage(undefined);
    setTitle(enter);
    setVisible(false);
  };
  const closeByEnter = (event) => {
    if (event.key == "Enter") {
      closeHandler();
    }
  };
  return (
    <Default>
      <Container>
        <Card>
          <Card.Header>
            {title} {counter}
          </Card.Header>
          <Card.Body>
            <Row>
              <Button onClick={increment}>Добавить</Button>
              <Spacer />
              <Button onClick={deleted}>Убрать</Button>
              <Spacer />
              <Button onClick={handler}>Изменить название</Button>
              <Spacer />
            </Row>
          </Card.Body>
        </Card>
        <Modal preventClose aria-labelledby="modal-title" open={visible}>
          <Modal.Header>
            <Text>Редактирование</Text>
          </Modal.Header>
          <Modal.Body>
            <Input
              autoFocus
              onKeyDown={closeByEnter}
              value={enter}
              placeholder="Введите название"
              onChange={handleTitleChange}
            ></Input>

            <Spacer />
            <Button
              onPress={closeHandler}
              color={errorMessage ? "error" : "default"}
            >
              Ok
            </Button>
            {errorMessage}
          </Modal.Body>
        </Modal>
      </Container>
    </Default>
  );
};
