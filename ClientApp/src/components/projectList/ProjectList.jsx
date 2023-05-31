import Table from "react-bootstrap/Table";
import { projectData } from "../fakedb/db.js";
import React, { useEffect, useState } from "react";
import ModalProject from "../modalProject/ModalProject.jsx";
import { useNavigate } from "react-router-dom";
import { MDBDataTable, MDBBtn } from "mdbreact";

function ProjectList(props) {
  const [projects, setProjects] = useState(null);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    function getProjects() {
      setProjects(projectData);
    }

    getProjects();
  }, []);

  const handleButtonClick = () => {
    // navigate(`/tickets/${project}`);
    navigate("/tickets");
  };

  if (!projects) return null; // or a loading spinner

  return (
    <div>
      <center>
        <h2 style={{ color: "#292929" }}>{props.title}</h2>
      </center>
      <div style={{ display: "flex", justifyContent: "flex-end", zIndex: 1 }}>
        {/* <ModalProject /> */}
      </div>
      <div>
        <MDBDataTable
          responsive
          striped
          bordered
          small
          data={props.buttonAction}
          style={{ backgroundColor: "white" }}
        />
      </div>
    </div>
  );
}
{
  /* <button style={{backgroundColor: '#FF7630'}} onClick={() => handleButtonClick(row.project)} className="btn btn-primary">Tickets</button> */
}
export default ProjectList;
