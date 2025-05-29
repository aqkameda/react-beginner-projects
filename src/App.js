import React from "react";
import "./index.scss";

const Modal = ({ toggleModal, setToggleModal, children }) => (
  <div className={`overlay animated ${toggleModal ? "show" : ""}`}>
    <div className="modal">
      <svg
        onClick={() => {
          setToggleModal(!toggleModal);
        }}
        height="200"
        viewBox="0 0 200 200"
        width="200"
      >
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      {children}
    </div>
  </div>
);

function App() {
  const [toggleModal, setToggleModal] = React.useState(false);

  return (
    <div className="App">
      <button
        onClick={() => {
          setToggleModal(!toggleModal);
        }}
        className="open-modal-btn"
      >
        ✨ Открыть окно
      </button>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        <h3>hello</h3>
      </Modal>
    </div>
  );
}

export default App;
