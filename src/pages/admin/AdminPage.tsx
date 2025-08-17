import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { AiOutlineUserAdd } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";

const AdminPage = () => {

  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/*Table*/}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Emgail</th>
            <th>Số điện thoại</th>
            <th>Setting</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <Button variant="success" onClick={handleShow}>
                <AiOutlineUserAdd />
                Thêm
              </Button>
              <Button variant="info" onClick={handleShow}>
                <CiEdit />
                Sửa
              </Button>
              <Button variant="danger" onClick={handleShow}>
                <MdDeleteForever />
                Xóa
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <Button variant="success" onClick={handleShow}>
                <AiOutlineUserAdd />
                Thêm
              </Button>
              <Button variant="info" onClick={handleShow}>
                <CiEdit />
                Sửa
              </Button>
              <Button variant="danger" onClick={handleShow}>
                <MdDeleteForever />
                Xóa
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Thornton</td>
            <td>Larry the Bird</td>
            <td>
              <Button variant="success" onClick={handleShow}>
                <AiOutlineUserAdd />
                Thêm
              </Button>
              <Button variant="info" onClick={handleShow}>
                <CiEdit />
                Sửa
              </Button>
              <Button className="Xoa" variant="danger" onClick={handleShow}>
                <MdDeleteForever />
                Xóa
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      {/*Madol Xóa*/}
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          
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
    </>
  );
};
export default AdminPage;
