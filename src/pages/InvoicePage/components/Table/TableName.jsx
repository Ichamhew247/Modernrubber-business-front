import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync } from "../../slice/todo-slice";

export default function TableName({ inputValueMew }) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const total = todos.reduce(
    (accumulator, todo) => accumulator + +todo.priceValue,
    0
  );
  const totalAsString = total.toFixed(2);
  console.log(typeof totalAsString);

  const [integerPart, decimalPart] = totalAsString.split(".");

  console.log(`จำนวนเงิน (บาท): ${integerPart}`);
  console.log(`สตางค์: ${decimalPart}`);
  return (
    <>
      <table className="  table-fixed w-[580px] h-[400px]  mt-2 border-collapse border  text-center">
        <thead>
          <tr>
            <th className=" font-medium w-9 h-12 ">ลำดับ</th>
            <th className="font-medium  w-28 ">
              เลขที่ใบกำกับภาษี / ใบแจ้งหนี้
            </th>
            <th className="font-medium  w-28 ">
              วันที่ออกใบกำกับภาษี / ใบแจ้งหนี้
            </th>
            <th className="font-medium  w-[70px]" colSpan="2">
              จำนวนเงิน <br />
              บาท / ส.ต
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, index) => (
            <tr key={index}>
              <td className="h-4">{index + 1}</td>
              <td className="">
                {index < todos.length ? todos[index].taxValue : ""}
              </td>
              <td>{index === 0 ? inputValueMew : ""}</td>
              {/* <td>
                {index === 0 ? (+integerPart).toLocaleString("en-US") : ""}
              </td> */}

              <td>
                {index === 0
                  ? +integerPart === 0
                    ? "-"
                    : (+integerPart).toLocaleString("en-US")
                  : ""}
              </td>
              <td>
                {index === 0
                  ? +decimalPart === 0
                    ? "-"
                    : (+decimalPart).toLocaleString("en-US")
                  : ""}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="h-8"></td>
            <td className="">รวมบิล 1 ฉบับ</td>
            <td className="">รวมเงิน</td>
            {/* <td className="">{total != 0 ? total : ""}</td> */}
            {/* <td className="">{(+integerPart).toLocaleString("en-US")}</td> */}
            <td className="">
              {+integerPart === 0
                ? "-"
                : (+integerPart).toLocaleString("en-US")}
            </td>
            <td className="">
              {+decimalPart === 0
                ? "-"
                : (+decimalPart).toLocaleString("en-US")}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
