import React from "react";
import { useState } from "react";

const TextField = () => {

    const [inputValue, setInputValue] = useState('');

    const onChangeInputHandler = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Type name, ID, or Document..."
          value={inputValue}
          onChange={(e) => onChangeInputHandler(e)}
        />
        {/* <p>Patient</p> */}
      </div>
    );
};

export default TextField;