import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4" md="6">
      <div className="pb-5 text-center">
        <img
          className="bg-white mb-3"
          src={data.companylogo}
          alt={data.role}
          style={{ height: 80, width: "auto", maxWidth: "100%", objectFit: "contain" }}
        />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;