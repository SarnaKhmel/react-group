import { useState } from "react";

const User = ({ id, name, email, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (e) => {
    e.preventDefault();
    onEdit(id, e.target.name.value, e.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            defaultValue={email}
            placeholder="email"
          />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div>
          <span>{name}</span> | <span>{email}</span>
          <div>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
