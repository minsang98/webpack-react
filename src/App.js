import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Discussions from "./components/Discussions";

function App() {
  const submitHandler = (e, name, title, question) => {
    e.preventDefault();
    fetch("http://localhost:4000/discussions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Math.max(...data.map((v) => v.id)) + 1,
        avatarUrl:
          "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
        author: name,
        createdAt: new Date().toISOString(),
        title,
        answer: [],
        url: "",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data.slice(0, 9));
      });
  };
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilterData(data.slice(0, 9));
      });
  }, []);
  const selectPage = (num) => {
    const sliceStart = num * 10 - 10 ? num * 10 - 10 - 1 : num * 10 - 10;
    const sliceEnd = num * 10 - 1;
    return setFilterData(data.slice(sliceStart, sliceEnd));
  };
  return (
    <div>
      <Header />
      <Form submitHandler={submitHandler} />
      <Discussions
        data={data}
        filterData={filterData}
        selectPage={selectPage}
      />
    </div>
  );
}

export default App;
