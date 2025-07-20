import classes from "./Header.module.css";
import logo from "../assets/images.png";
import { useState } from "react";

export default function Header({ onAdd }) {
  const [isLogin, setLogin] = useState(false);

  function loginHandler() {
    setLogin(true);
  }

  return (
    <>
      <div className={classes.overall}>
        <header className={classes.header}>
          <div className={classes.image}>
            <img src={logo} alt="a book reading panda" />
          </div>
          <h1 className={classes.heading}>Reader's Choice</h1>

          <nav className={classes.nav}>
            {isLogin ? (
              <button onClick={onAdd}>Add more</button>
            ) : (
              <button onClick={loginHandler}>Login</button>
            )}
          </nav>
        </header>
      </div>
    </>
  );
}
