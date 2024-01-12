// import { useState } from "react";
// import Button from "../components/Button";
// import Fetch from "../components/Fetch";

// const HardLevel = () => {
//   const [fetchStart, setFetchStart] = useState(false);
//   const handleButtonClick = () => {
//     setFetchStart(true);
//   };
//   const handleResetButtonClick = () => {
//     setFetchStart(false);
//   };
//   return (
//     <div className="hard-level">
//       {!fetchStart && (
//         <Button
//           typeOf="button"
//           buttonText="Hard"
//           classForStyling="btn"
//           onClick={handleButtonClick}
//         />
//       )}

//       {fetchStart && (
//         <div>
//           <div>
//             <Fetch numberOfPokemon={15} />
//           </div>
//           <div>
//             <Button
//               typeOf="button"
//               buttonText="Exit"
//               classForStyling="btn"
//               onClick={handleResetButtonClick}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HardLevel;
