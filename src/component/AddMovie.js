import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddMovie = ({ handeleAdd }) => {
  const [inputs, setInputs] = useState({
    MovieName: "",
    Description: "",
    image: "",
    rating: 0,
    trailer: "",
  });

  const handlechange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const addNewp = () => {
    handeleAdd(inputs);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>MovieName</Form.Label>
              <Form.Control
                name="MovieName"
                type="text"
                placeholder="MovieName"
                autoFocus
                onChange={handlechange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
              onChange={handlechange}
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="Description"
                type="text"
                placeholder="Description"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                name="image"
                type="text"
                placeholder="image"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>rating</Form.Label>
              <Form.Control
                placeholder="rating"
                name="rating"
                onChange={handlechange}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {" "}
            Close{" "}
          </Button>
          <Button variant="primary" onClick={addNewp}>
            {" "}
            Save Changes{" "}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddMovie;
