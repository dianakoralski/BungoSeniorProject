import React from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        id="password"
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Must be at least 12 characters"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default PasswordInput;
