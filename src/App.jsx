import "./styles.css";
import { Form } from "./Form";
import { useEffect, useState } from "react";

function App() {
  const [toggleForm, setToggleForm] = useState(true);
  const [selectedLaptop, setSelectedLaptop] = useState(null);
  const [laptopList, setLaptopList] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null || localValue == "undefined") return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(laptopList));
  }, [laptopList]);

  function changeToggle() {
    if (toggleForm == false) {
      setSelectedLaptop(null);
      return setToggleForm(true);
    }
    return setToggleForm(false);
  }

  function addNewForm(newForm) {
    setLaptopList((currentLaptopList) => {
      const existingLaptop = currentLaptopList.find(
        (laptop) => laptop.id === newForm.id
      );

      if (existingLaptop) {
        return currentLaptopList.map((laptop) =>
          laptop.id === newForm.id ? { ...laptop, ...newForm } : laptop
        );
      }

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

  function editLaptop(id) {
    changeToggle();

    const laptopNow = laptopList.find(
      (currentLaptop) => currentLaptop.id === id
    );

    return setSelectedLaptop(laptopNow);
  }

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
                        <button
                          className="action-button edit"
                          onClick={() => editLaptop(laptop.id)}
                        >
                          Edit
                        </button>
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
            <Form
              changeToggle={changeToggle}
              onSubmit={addNewForm}
              selectedLaptop={selectedLaptop}
            />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
