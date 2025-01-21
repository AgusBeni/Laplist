import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export function Form({ changeToggle, onSubmit, selectedLaptop }) {
  const [form, setForm] = useState({});

  function handleInput(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  useEffect(() => {
    //TODO: populate the input
    if (selectedLaptop) {
      setForm((prevForm) => ({ ...prevForm, ...selectedLaptop }));
    }
  }, [selectedLaptop]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(form);

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
