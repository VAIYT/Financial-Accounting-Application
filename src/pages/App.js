import "../App.css";
import { Button, Loading } from "@nextui-org/react";
import { Default } from "../layouts/Default";

export const App = () => {
  return (
    <Default>
      <Button>
        {true ? (
          "SEND"
        ) : (
          <Loading type="points-opacity" color="currentColor" size="sm" />
        )}
      </Button>
    </Default>
  );
};
