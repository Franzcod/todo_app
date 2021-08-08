import React from "react";
import { connect } from "react-redux";
import { FiSave } from "react-icons/fi";
import Swal from "sweetalert2";
import { addTodo } from "../../actions/index";
import styles from "./../AddTodo/AddTodo.module.css";

function validate(data) {
  const errors = {};
  if (!data.title) errors.title = "Debe ingresar un titulo";
  if (!data.description) errors.description = "Debe ingresar una descripcion";
  if (!data.place) errors.place = "Debe ingresar un lugar";
  if (!data.date) errors.date = "Debe ingresar fecha";
  return errors;
}

export function AddTodo({ addTodo, push }) {
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
    <div className={styles.divRey}>
      <h3 style={{ color: "#FF4848", width: "15%" }}>Add ToDo</h3>
      <form
        id="form_id"
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
        {/*<button type="submit">
          <FiSave />
          ADD
  </button>*/}
        <div className={styles.contButton}>
          <button type="submit" className={styles.button}>
            <FiSave />
          </button>
        </div>
      </form>
    </div>
  );
}

function FormItem({ label, name, value, handleChange, error }) {
  return (
    <div className={styles.compInput}>
      <div className={styles.label}>
        <p>{label}</p>
      </div>

      <input name={name} value={value} onChange={handleChange} />
      <span style={{ color: "red", fontWeight: 700 }}>{error}</span>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
