import { Text, Button } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [isExpended, setExpended] = useState(false);
  const limit = 300;

  if (!children) {
    return null;
  }

  if (children.length <= limit) {
    return <Text>{children}</Text>;
  }

  const summary = isExpended ? children : children.substring(0, limit) + "...";

  return (
    <>
      <Text>
        {summary}
        <Button
          size={"xs"}
          marginLeft={1}
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpended(!isExpended)}
        >
          {isExpended ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default ExpendableText;
