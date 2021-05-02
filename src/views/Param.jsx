import React from "react";

import { useParams } from "react-router-dom";

const Param = (props) => {
  const { id } = useParams();
  return (
    <div className="Param">
      <p>This view receives a param</p>
      <p>The param sent to this page was <span>{ id }</span></p>
    </div>
  )
};

export default Param;