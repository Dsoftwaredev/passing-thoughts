import React, { useState } from 'react';
export default function Backgroundstate() {
  // call useState and assign its return values to `color` and `setColor`
const [color, setColor] = useState();
 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() => setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}