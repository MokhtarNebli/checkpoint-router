import React from "react";
import { Form, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Filter = ({ handelKey, handleRating }) => {
  return (
    <div>
      <div>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => handelKey(e.target.value)}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </div>
      <div>
        <Form className="d-flex">
          <ReactStars
            iveColor="#ffd700"
            name="star" /* name of the radio input, it is required */
            /* number of selected icon (`0` - none, `1` - first) */
            editing={true}
            onStarClick={(value) => handleRating(value)}
          />
        </Form>
      </div>
    </div>
  );
};

export default Filter;
