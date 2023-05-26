import Table from "react-bootstrap/Table";
import { projectData } from "../fakedb/db.js";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { MDBDataTable, MDBBtn } from 'mdbreact';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = [

      {
        label: 'Projects',
        field: 'projects',
        width: 150
      },
      {
        label: 'Description',
        field: 'description',
        width: 270
      },
      {
        label: 'Contributor_name',
        field: 'contributor_name',
        width: 200
      }

  ]

  // Fetch database
  useEffect(() => {
    function getProjects() {
      setProjects(projectData);
    }

    getProjects();
  }, []);


  // // NOT IMPLEMENTED YET This method will delete a project
  // function deleteProject(id) {
  //   const newProjects = projects.filter((el) => el.id !== id);
  //   setProjects(newProjects);
  // }

  return (
    <div style={{postition:"relative", zIndex:1}}>
    <center><h1>Project list</h1></center>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="primary" onClick={handleShow}>
                Create new
            </Button>
        </div>
        <MDBDataTable
          responsive
          striped
          bordered
          small
          data={data}
          style={{ backgroundColor: "white" }}
        />


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectList;
