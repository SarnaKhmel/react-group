import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const messages = useSelector((state) => state.message);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        voluptas error ullam quae aliquid atque eaque veritatis nulla, libero
        asperiores nihil alias ut? Rerum vitae iusto magni excepturi possimus
        tempore!
      </p>
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

export default Home;
