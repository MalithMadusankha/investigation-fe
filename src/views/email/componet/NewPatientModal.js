import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewPatientForm from "./NewPatientForm";

export default function NewPatientModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="primary" size="sm" onClick={toggle}>
        New Patient
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Add Patient</ModalHeader>
        <ModalBody>
          <NewPatientForm toggle={toggle} setSuccess={setSuccess} />
        </ModalBody>
      </Modal>
    </>
  );
}
