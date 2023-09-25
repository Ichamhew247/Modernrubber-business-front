import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosAsync } from "../../slice/todo-slice";

export default function TableName({ dateTable }) {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const total = todos.reduce(
    (accumulator, todo) => accumulator + +todo.priceValue,
    0
  );

  return (
    <>
      <table className="  table-fixed w-[640px] h-[400px] m-auto mt-10 border-collapse border  text-center">
        <thead>
          <tr>
            <th className="w-24">ลำดับ</th>
            <th>
              เลขที่ใบกำกับภาษี <br />/ ใบแจ้งหนี้
            </th>
            <th>
              วันที่ออกใบกำกับภาษี <br />/ ใบแจ้งหนี้
            </th>
            <th>
              จำนวนเงิน <br />
              บาท / ส.ต
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, index) => (
            <tr key={index}>
              <td className="">{index + 1}</td>
              <td className="">
                {index < todos.length ? todos[index].taxValue : ""}
              </td>
              <td className="">{index === 0 ? dateTable : ""}</td>
              <td className="">
                {index < todos.length ? todos[index].priceValue : ""}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className=""></td>
            <td className="">รวมบิล 1 ฉบับ</td>
            <td className="">รวมเงิน</td>
            <td className="">{total}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}
