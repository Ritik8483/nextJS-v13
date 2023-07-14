"use client";

import React from "react";

const StudentDetails = ({ params }) => {
  console.log("params", params);
  return (
    <div>
      <h4>StudentDetails {params.students}</h4>
    </div>
  );
};

export default StudentDetails;
