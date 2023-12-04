import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalSection({onDelete}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header >

                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        NO
                    </Button>
                    <Button variant="secondary" onClick={onDelete}>
                        YES
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSection;