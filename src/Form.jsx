// eslint-disable-next-line react/prop-types
export function Form({ changeToggle, handleSubmit }) {
  return (
    <>
      <section>
        <h1>Form</h1>
      </section>
      <div>
        <form onSubmit={() => handleSubmit()}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="processor">Processor</label>
          <input type="text" id="processor" />
          <label htmlFor="memoryType">Memory type</label>
          <input type="text" id="memoryType" />
          <label htmlFor="memorySize">Memory size</label>
          <input type="text" id="memorySize" />
          <label htmlFor="gpu">GPU</label>
          <input type="text" id="gpu" />
          <label htmlFor="vram">VRAM</label>
          <input type="text" id="vram" />
          <label htmlFor="ram">RAM</label>
          <input type="text" id="ram" />

          <button className="action-button edit" onClick={() => changeToggle()}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
