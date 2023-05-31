import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from "../fakedb/db.js";

export default function ModalTeam() {
  const [show, setShow] = useState(false);
  const [member, setMember] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        style={{ marginTop: "30%", backgroundColor: "#FF7630" }}
        onClick={handleShow}
      >
        New Member
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Select aria-label="Default select example">
                <option>- Select member -</option>
                {db.map((m) => (
                  <option
                    key={m.id}
                    onChange={(e) => setMember(e.target.value)}
                    value={member}
                  >
                    {m.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
