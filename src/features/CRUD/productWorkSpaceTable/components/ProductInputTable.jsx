export default function ProductTableInput({ product }) {
  // ตรวจสอบว่า product ถูกตั้งค่าค่าแล้ว และมีคุณสมบัติ .length
  if (product && product.length) {
    return (
      <td id="wantHover" className="relative p-4 ">
        {product.length > 20 ? (
          <div className="truncate overflow-ellipsis w-26 p-2">{product}</div>
        ) : (
          <div>{product}</div>
        )}
        <div className="absolute-text">
          <div className="content w-48 p-2">{product}</div>
        </div>
      </td>
    );
  }

  // ถ้า product ไม่ถูกตั้งค่าหรือไม่มีคุณสมบัติ .length ให้แสดงข้อความเริ่มต้นเปล่า
  return (
    <td id="wantHover" className="relative bg-amber-200">
      <div></div>
      <div className="absolute-text">
        <div className="content w-48 p-2"></div>
      </div>
    </td>
  );
}

// export default function ProductTableInput({ product }) {
//   return (
//     <>
//       <td id="wantHover" className="relative bg-amber-200">
//         {product.length > 20 ? (
//           <div className="truncate overflow-ellipsis w-26 p-2">{product}</div>
//         ) : (
//           <div>{product}</div>
//         )}
//         <div className="absolute-text">
//           <div className="content w-48 p-2">{product}</div>
//         </div>
//       </td>
//     </>
//   );
// }
