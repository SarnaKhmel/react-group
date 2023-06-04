import { addMessage } from "../Redux/store";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Redux = () => {
  const messages = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const submitMessage = () => {
    dispatch(addMessage(input));
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h2>Redux text </h2>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={submitMessage}>Submit</button>

      <ul>
        {messages.length > 0 ? (
          <>
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </>
        ) : (
          <li>No messages</li>
        )}
      </ul>
    </div>
  );
};

export default Redux;
