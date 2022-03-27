import React from "react";
import "./Numpad.css";

const Numpad = () => {
  return (
    <>
      <form name="calculator">
        <input class="button digits" type="button" value="7" />
        <input class="button digits" type="button" value="8" />
        <input class="button digits" type="button" value="9" />
        <input class="button mathButtons" type="button" value="100" />
        <br />
        <input class="button digits" type="button" value="4" />
        <input class="button digits" type="button" value="5" />
        <input class="button digits" type="button" value="6" />
        <input class="button mathButtons" type="button" value="200" />
        <br />
        <input class="button digits" type="button" value="1" />
        <input class="button digits" type="button" value="2" />
        <input class="button digits" type="button" value="3" />
        <input class="button mathButtons" type="button" value="500" />
        <br />
        <input class="button digits" type="button" value="=" />
        <input class="button digits" type="button" value="0" />
        <input id="clearButton" class="button" type="button" value="C" />

        <input class="button mathButtons" type="button" value="1000" />
      </form>
    </>
  );
};

export default Numpad;
