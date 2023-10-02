export default function ProductTableInput({ product }) {
  return (
    <td id="wantHover" className="relative p-4">
      {product && product.length > 10 ? (
        <div className="truncate overflow-ellipsis w-26 p-2 ">
          {product}
          <div className="absolute-text ">
            <div className="content w-48 p-2 ">{product}</div>
          </div>
        </div>
      ) : (
        <div>{product}</div>
      )}
    </td>
  );
}

// export default function ProductTableInput({ product }) {
//   if (!product) {
//     return (
//       <td id="wantHover" className="p-4">
//         mew
//       </td>
//     );
//   }

//   return (
//     <td id="wantHover" className="relative p-4 ">
//       {product.length > 20 && product ? (
//         <div className="truncate overflow-ellipsis w-26 p-2">
//           {product}
//           <div className="absolute-text">
//             <div className="content w-48 p-2">{product}</div>
//           </div>
//         </div>
//       ) : (
//         <div>{product}</div>
//       )}
//     </td>
//   );
// }
