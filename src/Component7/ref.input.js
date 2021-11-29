import React, { useState, useRef } from 'react';

const Refinput = () => {
  const [isEditing, setEditing] = useState(false);
  const inputRef = useRef();
  const toggleEditing = () => {
    setEditing(!isEditing);
    if (isEditing) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      {isEditing && <input ref={inputRef} />}
      <button onClick={toggleEditing}>Edit</button>
    </>
  );
};
export default Refinput
