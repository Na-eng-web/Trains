import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

const Body = ({ channge, SetChange, SetFrom }) => {
  const [findPara, SetFP] = useState({ From: "", To: "" });

  const sendKeyToServer = async () => {
    SetChange(!channge);
    SetFrom(findPara);
    try {
      const response = await axios.post("http://localhost:4000/api", {
        From: findPara.From,
        To: findPara.To,
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //   console.log(findPara);
  return (
    <VStack>
      <Flex w={"100%"} p={5} justify={"space-around"}>
        <FormControl mr={"5px"} maxW={"15rem"} isRequired>
          <FormLabel>From Station</FormLabel>
          <Select
            onChange={(e) => {
              SetFP({ ...findPara, From: e.target.value });
            }}
            placeholder="From Station"
          >
            <option>Parbhani</option>
            <option>Selu</option>
            <option>Partur</option>
            <option>Jalana</option>
            <option>Aurangabad</option>
          </Select>
        </FormControl>
        <FormControl maxW={"15rem"} isRequired>
          <FormLabel>To Station</FormLabel>
          <Select
            onChange={(e) => {
              SetFP({ ...findPara, To: e.target.value });
            }}
            placeholder="To Station"
          >
            <option>Parbhani</option>
            <option>Selu</option>
            <option>Partur</option>
            <option>Jalana</option>
            <option>Aurangabad</option>
          </Select>
        </FormControl>
      </Flex>
      <Button onClick={sendKeyToServer} colorScheme="green">
        Find Train
      </Button>
    </VStack>
  );
};

export default Body;
