import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { addUsers, closeModal, toggle } from "../features/counter/counterSlice";
const AddUserModal = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.counter.users);
  const modalVisible = useSelector((state) => state.counter.modalVisible);
  const defaultValue = useSelector((state) => state.counter.defaultValue);
  const addNewUser = (e) => {
    e.preventDefault();
    let payload = {
      id: users.length + 1,
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      age: e.target[2].value,
      email: e.target[3].value,
    };
    dispatch(addUsers(payload));
  };
  
  return (
    <div>
      <Modal isOpen={modalVisible} toggle={()=>dispatch(closeModal())}>
        <ModalHeader>
          <h1>Add User</h1>
        </ModalHeader>
        <ModalBody>
          <form id="users" onSubmit={addNewUser}>
            <input
              type="text"
              className="form-control my-2"
              placeholder="Firstname"
              defaultValue={defaultValue.firstName}
              />
            <input
              type="text"
              className="form-control my-2"
              placeholder="Lastname"
              defaultValue={defaultValue.lastName}
              />
            <input
              type="number"
              className="form-control my-2"
              placeholder="Age"
              defaultValue={defaultValue.age}
              />
            <input
              type="email"
              className="form-control my-2"
              placeholder="Email"
              defaultValue={defaultValue.email}
              />
          </form>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" type="submit" form="users">
            Save
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddUserModal;
