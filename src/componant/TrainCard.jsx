import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const TrainCard = ({ a, From }) => {
  let calculate = () => {
    let index1 = a.route.indexOf(From.From);
    let index2 = a.route.indexOf(From.To);
    let result = a.dist.slice(index1, index2 + 1);
    let price =
      1.25 *
      result.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
    return price;
  };
  return (
    <Box borderWidth="1px" px={5} borderRadius="md" p={4} mb={4} boxShadow="md">
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        {a.name + " " + a.route[0] + " -> " + a.route[a.route.length - 1]}
      </Text>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text color="gray.500" fontWeight="bold">
          From: {From.From}
        </Text>
        <Text color="gray.500" fontWeight="bold">
          To: {From.To}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text color="gray.500">{a.time[a.route.indexOf(From.From)]}</Text>
        <Icon as={ArrowForwardIcon} />
        <Text color="gray.500">{a.time[a.route.indexOf(From.To)]}</Text>
      </Flex>

      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="lg" fontWeight="bold">
          Price: {calculate()}
        </Text>
      </Flex>
    </Box>
  );
};

export default TrainCard;
