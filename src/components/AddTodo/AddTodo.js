import React from "react";
import { connect } from "react-redux";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";
import { addTodo } from "../../actions/index";
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.
function validate(data) {
  const errors = {};
  if (!data.title) errors.title = "Debe ingresar un titulo";
  if (!data.description) errors.description = "Debe ingresar una descripcion";
  if (!data.place) errors.place = "Debe ingresar un lugar";
  if (!data.date) errors.date = "Debe ingresar fecha";
  return errors;
}

export function AddTodo({ addTodo, push }) {
  const style = {
    backgroundColor: "#F5FDB0",
    margin: "30px auto",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "80px",
    textDecoration: "none",
    color: "black",
    borderRadius: "0 30% 0 0",
    maxWidth: "600px",
  };

  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    place: "",
    date: "",
  });

  const [errors, setErrors] = React.useState({});

  function handleChange(e) {
    setFormData((prevData) => {
      let txT =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
      const state = {
        ...prevData,
        [e.target.name]: txT,
      };
      console.log(txT);
      const validations = validate(state);
      setErrors(validations);

      return state;
    });
  }

  function handleSubmit(e) {
    e.preventDefault(); //                 <----------------------------prevent default!!!
    if (Object.values(errors).length > 0)
      // alert("Completa la informacion solicitada");
      // Swal.fire("Oops...", "Quedo algun campo vacio!", "error");
      Swal.fire({
        title: "Oops.!",
        text: "Algun campo quedo vacio.",
        imageUrl: "https://i.gifer.com/PvWQ.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    else {
      addTodo(
        formData.title,
        formData.description,
        formData.place,
        formData.date
      );
      Swal.fire({
        title: "ToDo Save!",
        text: "Todo guardada con exito!.",
        imageUrl: "https://i.gifer.com/PN7i.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
      setFormData({ title: "", description: "", place: "", date: "" });
      push("/");
    }
  }

  return (
    <div style={style}>
      <h3 style={{ color: "#FF4848", width: "15%" }}>Add ToDo</h3>
      <form
        onSubmit={handleSubmit}
        style={{ margin: "0 auto", width: "20rem" }}
      >
        <FormItem
          label="Title:"
          name="title"
          value={formData.title}
          handleChange={handleChange}
          error={errors.title}
        />
        <FormItem
          label="Description:"
          name="description"
          value={formData.description}
          handleChange={handleChange}
          error={errors.description}
        />
        <FormItem
          label="Place:"
          name="place"
          value={formData.place}
          handleChange={handleChange}
          error={errors.place}
        />
        <FormItem
          label="Date:"
          name="date"
          value={formData.date}
          handleChange={handleChange}
          error={errors.date}
        />
        <button
          type="submit"
          style={{
            margin: "20px",
            padding: "10px",
            backgroundColor: "#FF4848",
            borderRadius: "16px",
            color: "white",
            border: "none",
          }}
        >
          <FiSave />
          ADD
        </button>
      </form>
    </div>
  );
}

function FormItem({ label, name, value, handleChange, error }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // width: "20rem",
        margin: "10px",
        fontWeight: "600",
      }}
    >
      <label>{label}</label>
      <input
        style={{
          border: "none",
          margin: "5px",
          borderRadius: "8px",
          padding: "5px",
        }}
        name={name}
        value={value}
        onChange={handleChange}
      />
      <span style={{ color: "red", fontWeight: 700 }}>{error}</span>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
