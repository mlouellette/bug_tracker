import Table from "react-bootstrap/Table";
import { projectData } from "../fakedb/db.js";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function ProjectList() {
  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Fetch database
  useEffect(() => {
    function getProjects() {
      setProjects(projectData);
    }

    getProjects();
  }, []);

  const Project = (props) => (
    <tr>
      <td>{props.project.projects}</td>
      <td>{props.project.description}</td>
      <td>{props.project.contributor_name}</td>
    </tr>
  );

  // NOT IMPLEMENTED YET This method will delete a project
  function deleteProject(id) {
    const newProjects = projects.filter((el) => el.id !== id);
    setProjects(newProjects);
  }

  // This method will map out the projects on the table
  function List() {
    return projects.map((project) => {
      return (
        <Project
          project={project}
          deleteProject={() => deleteProject(project.id)}
          key={project.id}
        />
      );
    });
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <center>PROJECTS LIST</center>
            </th>
            <th></th>
            <th>
              <center>
                {" "}
                <Button onClick={handleShow} variant="danger" size="lg">
                  Create New
                </Button>
              </center>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>PROJECTS</th>
            <th>DESCRIPTION</th>
            <th>CONTRIBUTORS</th>
          </tr>
        </thead>
        <tbody>{List()}</tbody>
      </Table>

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
