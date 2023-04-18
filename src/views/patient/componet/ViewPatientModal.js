import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewPatientForm from "./NewPatientForm";
import ViewPatientForm from "./ViewPatientForm";

export default function ViewPatientModal({ patient }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="primary" size="sm" onClick={toggle}>
        View
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>View Patient</ModalHeader>
        <ModalBody>
          <ViewPatientForm
            patient={patient}
            toggle={toggle}
            setSuccess={setSuccess}
          />
        </ModalBody>
      </Modal>
    </>
  );
}
