import { useTranslation } from "react-i18next";
export default function TableName({ dateInside, todos }) {
  const total = todos.reduce(
    (accumulator, todo) => accumulator + +todo.priceValue,
    0
  );
  const { t } = useTranslation();
  const totalAsString = total.toFixed(2);
  console.log(typeof totalAsString);

  const [integerPart, decimalPart] = totalAsString.split(".");

  console.log(`จำนวนเงิน (บาท): ${integerPart}`);
  console.log(`สตางค์: ${decimalPart}`);
  return (
    <>
      <table className="table-fixed w-[580px] h-[400px] mt-2 border-collapse border text-center">
        <thead>
          <tr>
            <th className="text-xs font-medium w-9 h-12">{t("Order")}</th>
            <th className="text-xs  font-medium w-28">{t("Invoice date2")}</th>
            <th className="text-xs  font-medium w-28">{t("Details")}</th>
            <th className="text-xs  font-medium w-[70px]" colSpan="2">
              {t("Amount")} <br />
              {t("Baht / Satang")}
            </th>
          </tr>
        </thead>
        <tbody>
          {[...Array(8)].map((_, index) => {
            const currentTodo = todos[index] || {};
            const [integerPart, decimalPart] = (
              currentTodo.priceValue || "0.00"
            ).split(".");
            return (
              <tr key={index}>
                <td className="h-4">{index + 1}</td>
                <td className="">{currentTodo.taxValue || ""}</td>
                <td>{index === 0 ? dateInside : ""}</td>
                <td>
                  {currentTodo.priceValue
                    ? (+integerPart).toLocaleString("en-US")
                    : (+decimalPart).toLocaleString("en-US") === 0
                    ? ""
                    : ""}
                </td>
                <td>
                  {currentTodo.priceValue !== undefined &&
                  currentTodo.priceValue !== null
                    ? Number.isInteger(+currentTodo.priceValue)
                      ? "-"
                      : (+decimalPart).toLocaleString("en-US")
                    : ""}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="h-8"></td>
            <td className="">{t("Total invoices: 0")}</td>
            <td className="">{t("Total amount")}</td>
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
