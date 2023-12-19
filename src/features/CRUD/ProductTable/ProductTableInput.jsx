import { v4 as uuidv4 } from "uuid";

export default function ProductTableInput({ companyList }) {
  const uniqueKey = uuidv4();
  return (
    <td
      key={uniqueKey}
      id="wantHover"
      className="relative  border-b-2 border-white"
    >
      {companyList && companyList.length > 10 ? (
        <div className="truncate overflow-ellipsis w-26 p-2 ">
          {companyList}
          <div className="absolute-text ">
            <div className="content w-48 p-2 ">{companyList}</div>
          </div>
        </div>
      ) : (
        <div>{companyList}</div>
      )}
    </td>
  );
}

// export default function ProductTableInput({ product, id }) {
//   return (
//     <td key={`product-input-${id}`} id="wantHover" className="relative p-4">
//       {product && product.length > 10 ? (
//         <div className="truncate overflow-ellipsis w-26 p-2 ">
//           {product}
//           <div className="absolute-text ">
//             <div className="content w-48 p-2 ">{product}</div>
//           </div>
//         </div>
//       ) : (
//         <div>{product}</div>
//       )}
//     </td>
//   );
// }
