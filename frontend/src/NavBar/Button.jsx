// import PropTypes from "prop-types";
// import React from "react";
// import { useReducer } from "react";
// // import "./style.css";

// const Button = ({ stateProp, mode, type, className }) => {
//   const [state, dispatch] = useReducer(reducer, {
//     state: stateProp || "default",
//     mode: mode || "default",
//     type: type || "default",
//   });

//   return (
//     <div
//       className={`button ${state.type} ${state.state} ${state.mode} ${className}`}
//       onMouseLeave={() => {
//         dispatch("mouse_leave");
//       }}
//       onMouseEnter={() => {
//         dispatch("mouse_enter");
//       }}
//     >
//       {(state.state === "default" ||
//         (state.state === "hover" && state.type === "default") ||
//         (state.state === "hover" && state.type === "footer") ||
//         (state.state === "press" && state.type === "default") ||
//         (state.state === "press" && state.type === "footer")) && (
//         <div className="sign-up">
//           {state.type === "default" && <>SIGN UP</>}

//           {state.type === "header" && <>home</>}

//           {state.type === "footer" && <>terms and conditions</>}
//         </div>
//       )}

//       {state.type === "header" && ["hover", "press"].includes(state.state) && (
//         <>
//           <div className="text-wrapper">home</div>
//           <img
//             className="line"
//             alt="Line"
//             src={
//               state.mode === "light" && state.state === "hover"
//                 ? "image.svg"
//                 : state.state === "press" && state.mode === "default"
//                 ? "line-4.svg"
//                 : state.state === "press" && state.mode === "light"
//                 ? "line-4-2.svg"
//                 : "line-3.svg"
//             }
//           />
//         </>
//       )}
//     </div>
//   );
// };

// function reducer(state, action) {
//   switch (action) {
//     case "mouse_enter":
//       return {
//         ...state,
//         state: "hover",
//       };

//     case "mouse_leave":
//       return {
//         ...state,
//         state: "default",
//       };
//   }

//   return state;
// }

// Button.propTypes = {
//   stateProp: PropTypes.oneOf(["hover", "press", "default"]),
//   mode: PropTypes.oneOf(["light", "default"]),
//   type: PropTypes.oneOf(["header", "footer", "default"]),
// };



// export default Button
