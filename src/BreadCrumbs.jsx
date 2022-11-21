import React from "react";
import { Breadcrumb } from "react-bootstrap";

function BreadCrumbs() {
  return (
    <Breadcrumb className="breadcrumbs-container ">
      <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item active>Views</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadCrumbs;
