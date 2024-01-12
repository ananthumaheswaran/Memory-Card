// import { useState } from "react";
// import Button from "../components/Button";
// import Fetch from "../components/Fetch";

// const MediumLevel = () => {
//   const [fetchStart, setFetchStart] = useState(false);
//   const handleButtonClick = () => {
//     setFetchStart(true);
//   };
//   const handleRestButtonClick = () => {
//     setFetchStart(false);
//   };
//   return (
//     <div className="medium-level">
//       {!fetchStart && (
//         <Button
//           typeOf="button"
//           buttonText="Medium"
//           classForStyling="btn"
//           onClick={handleButtonClick}
//         />
//       )}

//       {fetchStart && (
//         <div>
//           <div>
//             <Fetch numberOfPokemon={10} />
//           </div>
//           <div>
//             <Button
//               typeOf="button"
//               buttonText="Exit"
//               classForStyling="btn"
//               onClick={handleRestButtonClick}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MediumLevel;
