import { useEffect, useState } from "react";

const Fetching = (channge) => {
  const [Data, SetData] = useState("");

  const abc = useEffect(() => {
    fetch("http://localhost:4000")
      .then((data) => data.json())
      .then((val) => SetData(val))
      .catch((err) => console.log(err));
  }, [channge]);

  //   export { Data };
  return { Data };
};

export default Fetching;
