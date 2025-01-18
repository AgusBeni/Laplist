import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Form({ changeToggle, onSubmit }) {
  const [newForm, setNewForm] = useState({});

  function handleInput(e) {
    setNewForm({ ...newForm, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(newForm);

    changeToggle();
  }

  return (
    <>
      <section>
        <h1>Form</h1>
      </section>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={handleInput} />
          <label htmlFor="processor">Processor</label>
          <input type="text" id="processor" onChange={handleInput} />
          <label htmlFor="memoryType">Memory type</label>
          <input type="text" id="memoryType" onChange={handleInput} />
          <label htmlFor="memorySize">Memory size</label>
          <input type="text" id="memorySize" onChange={handleInput} />
          <label htmlFor="gpu">GPU</label>
          <input type="text" id="gpu" onChange={handleInput} />
          <label htmlFor="vram">VRAM</label>
          <input type="text" id="vram" onChange={handleInput} />
          <label htmlFor="ram">RAM</label>
          <input type="text" id="ram" onChange={handleInput} />

          <button className="action-button edit">Submit</button>
        </form>
      </div>
    </>
  );
}
