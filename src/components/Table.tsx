// import * as React from 'react';
// import Draggable from 'react-draggable';

// export default function Table(props: ITableProps & ITableOptionsProps) {
//   return (
//     <Draggable onDrag={props.onDrag} onStop={props.onStop}>
//       <div className="table">
//         <div className="table-name">
//           <h3>{props.name}</h3>
//         </div>

//         {props.att.map((value, index) => (
//           <div key={index} className="attribute" id={props.name + '.' + value.name}>
//             <div className="element">
//               <h3>{value.name}</h3>
//             </div>
//             <div className="element type">
//               <h3>{value.type}</h3>
//             </div>
//             <div className="element null">
//               <h3>{value.null}</h3>
//             </div>
//             <div className="element pk">{value.pk ? <h3>pk</h3> : null}</div>
//           </div>
//         ))}
//       </div>
//     </Draggable>
//   );
// }
