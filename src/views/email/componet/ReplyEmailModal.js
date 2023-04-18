import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import ReplyEmailForm from "./ReplyEmailForm";

export default function ReplyEmailModal({ email }) {
  const [isOpen, setIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (success) window.location.reload();
  };

  return (
    <>
      <Button color="primary" size="sm" onClick={toggle}>
        Reply
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop={true}
        size="lg"
      >
        <ModalHeader toggle={toggle}>Reply Visitor </ModalHeader>
        <ModalBody>
          <ReplyEmailForm
            email={email}
            toggle={toggle}
            setSuccess={setSuccess}
          />
        </ModalBody>
      </Modal>
    </>
  );
}
