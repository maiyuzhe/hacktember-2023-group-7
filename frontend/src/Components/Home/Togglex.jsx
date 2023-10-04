// import PropTypes from "prop-types";
// import React from "react";
// import { useReducer } from "react";

// const Frame = ({ property1, darkLightClassName, ellipseClassName }) => {
//     const [state, dispatch] = useReducer(reducer, {
//         property1: property1 || "default",
//     });

//     return (
//         <div
//             className="frame"
//             onClick={() => {
//                 dispatch("click");
//             }}
//         >
//             <div className="overlap-group">
//                 <div className={`rectangle ${state.property1}`} />
//                 <div className={`dark-light ${darkLightClassName}`}>DARK/LIGHT</div>
//                 <div className={`ellipse property-1-${state.property1} ${ellipseClassName}`} />
//             </div>
//         </div>
//     );
// };

// function reducer(state, action) {
//     if (state.property1 === "default") {
//         switch (action) {
//             case "click":
//                 return {
//                     property1: "variant-2",
//                 };
//         }
//     }

//     if (state.property1 === "variant-2") {
//         switch (action) {
//             case "click":
//                 return {
//                     property1: "default",
//                 };
//         }
//     }

//     return state;
// }

// Frame.propTypes = {
//     property1: PropTypes.oneOf(["variant-2", "default"]),
// };


// export default Frame
