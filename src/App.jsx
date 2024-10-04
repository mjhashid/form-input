import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isFavorite: true,
  });
  console.log(formData);
  function changeHandle(event) {
    const { name, type, value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (formData.password === formData.confirmPassword) {
      console.log("Correct Password...!");
    } else {
      console.log("Incorrect Password...!");
    }
  }

  return (
    <>
      <div className="flex items-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 p-6  w-96 bg-purple-600 rounded "
        >
          <input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={changeHandle}
            name="email"
            className="p-3 rounded border-none"
          />

          <input
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={changeHandle}
            name="password"
            className="p-3 rounded"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={changeHandle}
            name="confirmPassword"
            className="p-3 rounded"
          />
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              checked={formData.isFavorite}
              onChange={changeHandle}
              name="isFavorite"
              id="isFavorite"
              className="h-4 w-4"
            />
            <label htmlFor="isFavorite" className="font-bold text-white">
              Click to be a member
            </label>
          </div>
          <button className="max-w-auto p-2 bg-green-600 text-white font-bold font-xl text-center">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
