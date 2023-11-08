import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewInvestigatorForm from "./NewInvestigatorForm";

export default function NewInvestigatorModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="success" size="sm" onClick={toggle}>
        New Investigator
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Add Investigator</ModalHeader>
        <ModalBody>
          <NewInvestigatorForm toggle={toggle} setSuccess={setSuccess} />
        </ModalBody>
      </Modal>
    </>
  );
}
