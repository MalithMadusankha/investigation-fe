import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewComplainForm from "./NewComplainForm";

export default function NewComplainModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="success" size="sm" onClick={toggle}>
        New Complain
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Add Complain</ModalHeader>
        <ModalBody>
          <NewComplainForm toggle={toggle} setSuccess={setSuccess} />
        </ModalBody>
      </Modal>
    </>
  );
}
