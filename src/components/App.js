// import React, {Component, useState} from "react";
// import "./../styles/App.css";

// function App() {
//   const [flag, useFlag] = useState(false);
//   fun = () => {
//     useFlag(true);
//   };
//   function fun1() {
//     if(flag){
//     return (
//       <p id="para">
//         Hello, I've learnt to use the full-stack evaluation tool.This makes me so happy
//       </p>
//     );
//     }
//   }

//   return (
//     <div id="main">
//       <button id="click" onClick={fun}>Button</button>
//       {fun1()}
//     </div>
//   );
// }

// export default App;



import React, {Component, useState} from "react";

//import "./../styles/App.css";
function App() {

const [flag, useFlag] = useState(false);

const fun = () => {

useFlag(true);
};

return (

<div id="main">

<button id="click" onClick={fun}>Button</button>

{ flag && <p id="para">
                       Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
  </p>}

</div>

);

}

export default App;
