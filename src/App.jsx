import "./styles.css";
import { Form } from "./Form";
import { useState } from "react";

function App() {
  const [toggleForm, setToggleForm] = useState(true);

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

  function deleteLaptop(id) {
    const hasConfirmed = confirm("Delete this laptop from list?");

    if (hasConfirmed) {
      setLaptopList((currentLaptopList) => {
        return currentLaptopList.filter(
          (currentLaptop) => currentLaptop.id !== id
        );
      });
    }
  }

  // function editLaptop(id){
  //   setLaptopList(currentLaptopList.map(currentLaptop => [...currentLaptopList, ]))
  // }

  return (
    <>
      <nav>
        <h1 className="header">Laplist</h1>
        <div>
          <button className="nav-button" onClick={() => changeToggle()}>
            {toggleForm ? "Add item" : "Return"}
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
                        <button
                          className="action-button delete"
                          onClick={() => deleteLaptop(laptop.id)}
                        >
                          Delete
                        </button>
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
