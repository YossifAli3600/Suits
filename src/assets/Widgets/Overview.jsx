import Options from "./Options";
import React from 'react';

const OverviewGeneralOptions = (props) => {
  const options = [
    {
      name: "القانون الجنائي",
      id: 1
    },
    {
      name: "القانون المدني",
      id: 2
    },
    {
      name: "القانون الإداري",
      id: 3
    },
    {
      name: "القانون الدولي",
      id: 4
    }
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default OverviewGeneralOptions;
