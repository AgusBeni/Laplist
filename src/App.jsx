import "./styles.css";

function App() {
  return (
    <>
      <nav>
        <h1 className="header">Laplist</h1>
        <div>
          <button className="nav-button">Add item</button>
        </div>
      </nav>
      <main className="table">
        <div className="table-section">
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
              <tr>
                <td>Lenovo</td>
                <td>i7</td>
                <td>SSD</td>
                <td>1TB</td>
                <td>Nvidia RTX 2060</td>
                <td>4GB</td>
                <td>16GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Asus</td>
                <td>i5</td>
                <td>SSD</td>
                <td>2TB</td>
                <td>Nvidia RTX 2050</td>
                <td>2GB</td>
                <td>8GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell</td>
                <td>i9</td>
                <td>SSD</td>
                <td>3TB</td>
                <td>Nvidia GTX 1060</td>
                <td>8GB</td>
                <td>32GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell</td>
                <td>i9</td>
                <td>SSD</td>
                <td>3TB</td>
                <td>Nvidia GTX 1060</td>
                <td>8GB</td>
                <td>32GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell</td>
                <td>i9</td>
                <td>SSD</td>
                <td>3TB</td>
                <td>Nvidia GTX 1060</td>
                <td>8GB</td>
                <td>32GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell</td>
                <td>i9</td>
                <td>SSD</td>
                <td>3TB</td>
                <td>Nvidia GTX 1060</td>
                <td>8GB</td>
                <td>32GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell</td>
                <td>i9</td>
                <td>SSD</td>
                <td>3TB</td>
                <td>Nvidia GTX 1060</td>
                <td>8GB</td>
                <td>32GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
              <tr>
                <td>Dell</td>
                <td>i9</td>
                <td>SSD</td>
                <td>3TB</td>
                <td>Nvidia GTX 1060</td>
                <td>8GB</td>
                <td>32GB</td>
                <td>
                  <button className="action-button">Edit</button>
                  <button className="action-button">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
