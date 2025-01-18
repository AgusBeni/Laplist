import "./styles.css";
import { Form } from "./Form";
import { useState } from "react";

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  const [laptopList, setLaptopList] = useState([]);

  function changeToggle() {
    if (toggleForm == true) return setToggleForm(false);
    return setToggleForm(true);
  }

  function addNewForm(newForm) {
    setLaptopList((currentLaptopList) => {
      return [...currentLaptopList, { id: crypto.randomUUID(), ...newForm }];
    });
  }

  return (
    <>
      <nav>
        <h1 className="header">Laplist</h1>
        <div>
          <button className="nav-button" onClick={() => changeToggle()}>
           {toggleForm ? ("Add item"): ("Return")} 
          </button>
        </div>
      </nav>
      <main className="table">
        <div className="table-section">
          {toggleForm ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Processor</th>
                  <th>Memory type</th>
                  <th>Memory size</th>
                  <th>GPU</th>
                  <th>VRAM</th>
                  <th>RAM</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(laptopList || []).map((laptop) => {
                  return (
                    <tr key={laptop.id}>
                      <td>{laptop.name}</td>
                      <td>{laptop.processor}</td>
                      <td>{laptop.memoryType}</td>
                      <td>{laptop.memorySize}</td>
                      <td>{laptop.gpu}</td>
                      <td>{laptop.vram}</td>
                      <td>{laptop.ram}</td>
                      <td>
                        <button className="action-button edit">Edit</button>
                        <button className="action-button delete">Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <Form changeToggle={changeToggle} onSubmit={addNewForm} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
