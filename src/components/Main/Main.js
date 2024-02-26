import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import fl1 from "../img/leaf_01.png"
import fl2 from "../img/leaf_02.png"
import fl3 from "../img/leaf_03.png"
import fl4 from "../img/leaf_04.png"
import bg from "../img/bg.jpg"
import girl from "../img/girl.png"
import tress from "../img/trees.png"
import styles from "../styles/Main.module.css";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

const Main = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((v) => !v);

    if (isDisabled) e.preventDefault();
  };

  return (
    <>
      <section>
        <div class="leaves">
          <div class="set">
            <div><img src={fl1} alt="" /></div>
            <div><img src={fl2} alt="" /></div>
            <div><img src={fl3} alt="" /></div>
            <div><img src={fl4} alt="" /></div>
            <div><img src={fl1} alt="" /></div>
            <div><img src={fl2} alt="" /></div>
            <div><img src={fl3} alt="" /></div>
            <div><img src={fl4} alt="" /></div>
          </div>
        </div>
        <img src={bg} alt="" className="bg" />
        <img src={girl} alt="" className="girl" />
        <img src={tress} alt="" className="trees" />
        <div class="login">
          <h2>Rasul</h2>
          <div class="inputBox">
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Ваше имя"
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div class="inputBox">
            <input
              type="text"
              name="room"
              placeholder="Комната"
              value={values[ROOM]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <Link
            className={styles.group}
            onClick={handleClick}
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
          >
            <button type="submit" className={styles.btn}>
              Войти
            </button>
          </Link>
        </div>

      </section>
    </>
  );
};

export default Main;
