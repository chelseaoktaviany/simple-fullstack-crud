import { useState, useEffect } from "react";
import axios from "axios";

import { BASE_URL } from "../api";

import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);
  const [valueData, setValueData] = useState({
    name: "",
    emailAddress: "",
  });

  const fetchAllCustomers = async () => {
    await axios
      .get(`${BASE_URL}/customers`)
      .then((res) => {
        console.log(res.data);
        setDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = () => {
    const { name, value } = e.target;

    console.log(name, value);
  };

  const onSubmit = () => {};

  const onAdd = () => {
    console.log("Clicked add button");
  };

  const onEdit = () => {
    console.log("Clicked edit button");
  };

  useEffect(() => {
    return () => {
      fetchAllCustomers();
    };
  }, []);

  console.log(datas);

  return (
    <>
      <h1>CRUD Customer</h1>
      <div className="container-start">
        <button onClick={onAdd}>Add customer</button>
      </div>
      <div className="container">
        <table border="3">
          <thead>
            <th>No.</th>
            <th>Name</th>
            <th>Email address</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index}>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.emailAddress}</td>
                <td>
                  <button onClick={onEdit}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
