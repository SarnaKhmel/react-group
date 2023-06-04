const AddUsers = ({ onAdd }) => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    onAdd(event.target.name.value, event.target.email.value);
    event.target.name.value = "";
    event.target.email.value = "";
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add users</h3>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="email" />
      <button onSubmit={handleOnSubmit}>Save</button>
    </form>
  );
};

export default AddUsers;
