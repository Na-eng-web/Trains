import { Box, Button, Radio, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Fetching from "./Fetching";
import TrainCard from "./TrainCard";

const Trains = ({ channge, SetChange, From }) => {
  const { Data } = Fetching(channge);

  const [change, SetChang] = useState(false);

  let calculate = (a) => {
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

  let calculateT = (a) => {
    let index1 = a.route.indexOf(From.From);
    return parseInt(a.time[index1]);
  };

  return (
    <Box p={5} mt={5}>
      <Text>Total {Data.length + 1} Trains</Text>
      <Button
        m={3}
        onClick={() => {
          Data.sort((a, b) => {
            return calculate(a) - calculate(b);
          });
          SetChang(!change);
        }}
      >
        Sort By Price
      </Button>
      <Button
        m={3}
        onClick={() => {
          Data.sort((a, b) => {
            return calculateT(a) - calculateT(b);
          });
          SetChang(!change);
        }}
      >
        Sort By Time
      </Button>
      {Data ? (
        Data.map((e) => {
          return <TrainCard From={From} key={e.id} a={e} />;
        })
      ) : (
        <Spinner />
      )}
    </Box>
  );
};
export default Trains;
