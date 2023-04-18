import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ViewDoctorForm from "./ViewDoctorForm";

export default function ViewDoctorModal({ doctor }) {
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
        size="md"
      >
        <ModalHeader toggle={toggle}>View Doctor</ModalHeader>
        <ModalBody>
          <ViewDoctorForm
            doctor={doctor}
            toggle={toggle}
            setSuccess={setSuccess}
          />
        </ModalBody>
      </Modal>
    </>
  );
}
