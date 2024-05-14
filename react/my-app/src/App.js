import "./App.css";

import React, { useState } from "react";
import Modal from "./task_1_Modal";
import CensoredText from "./task_2_CensoredText";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <h1>React Components</h1>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </Modal>
      <CensoredText
        text="This is a censored text. The censored words are Love and React."
        censoredWords={["Love", "React"]}
      />
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
      <p>Check if it scrolls.</p>
    </div>
  );
};

export default App;
