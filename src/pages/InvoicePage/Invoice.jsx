import { useState } from "react";
import Print from "../InvoicePage/components/Print";
import Signature from "../InvoicePage/components/Signature/Signature";
import Topic from "../InvoicePage/components/Header/Topic";
import ClientName from "../InvoicePage/components/ClientName/ClientName";
import InputClient from "../InvoicePage/components/ClientName/InputClient";
import HeadName from "../InvoicePage/components/Header/HeadName";
import TableName from "../InvoicePage/components/Table/TableName";
import HeadNameInput from "../InvoicePage/components/Header/HeadInput";
import TodoForm from "../InvoicePage/components/Todo/TodoForm";
import DatesName from "../InvoicePage/components/Date/DatesName";
import DatesInput from "../InvoicePage/components/Date/DatesInput";
import DatesTableInput from "../InvoicePage/components/Date/DateTableInput";

export default function Invoice() {
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString(undefined, {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });

  const [showInvoice, setShowInvoice] = useState(false);
  const [client, setClient] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [companyTel, setCompanyTel] = useState("");
  const [day, setDay] = useState(formattedDate);
  const [dateTable, setDateTable] = useState(formattedDate);
  const [descript, setDescript] = useState("");
  // const [taxNumber, setTaxNumber] = useState("");
  // const [cash, setCash] = useState("");

  return (
    <>
      <main className="flex flex-col justify-between bg-white m-5 p-9 w-[210mm] h-[297mm] mx-auto  rounded shadow">
        {/* <main className="flex flex-col justify-between m-5 p-9 xl:max-w-4xl xl:mx-auto bg-yellow-300 rounded shadow"> */}
        {showInvoice ? (
          <div>
            <div className="flex flex-col items-center p-8">
              <HeadName
                name={name}
                address={address}
                email={email}
                companyTel={companyTel}
              />
            </div>
            <hr className="w-10/12 m-auto " />

            <div className="flex flex-col items-center justify-end">
              <Topic />
            </div>
            <div className="flex justify-end mr-10 gap-2">
              <div>วันที่</div>
              <div>
                <DatesName day={day} />
              </div>
            </div>

            <section className=" flex justify-between  ml-10 ">
              <div>
                <h2>
                  <ClientName client={client} descript={descript} />
                </h2>
              </div>
            </section>
            <div>
              <TableName
                // taxNumber={taxNumber}
                day={day}
                // cash={cash}
                dateTable={dateTable}
              />
            </div>

            <div>
              <Signature />
            </div>
            <div className=" flex  items-center justify-center gap-8">
              <button
                onClick={() => setShowInvoice(false)}
                className="no-print mt-5 bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Edit Information
              </button>
              <div className="">
                <Print />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center mr-4 ">
              <div className="text-4xl m-auto mb-7">ใบวางบิล</div>
              <main id="myHead">
                <main className="flex mb-3 gap-6 border border-[rgb(235, 232, 232)] ml-1 pl-4">
                  <main className="flex items-baseline">
                    <div>วันที่ :</div>
                    <div>
                      <DatesInput setDay={setDay} />
                    </div>
                  </main>
                  <main className="flex items-baseline">
                    <div>วันที่ออกใบกำกับภาษี :</div>
                    <div>
                      <DatesTableInput setDateTable={setDateTable} />
                    </div>
                  </main>
                </main>
                <InputClient setClient={setClient} />
                <main>
                  <TodoForm />
                </main>
              </main>
              <main className="flex flex-col ml-5">
                <HeadNameInput
                  setName={setName}
                  setAddress={setAddress}
                  setEmail={setEmail}
                  setCompanyTel={setCompanyTel}
                  setDescript={setDescript}
                />
                <button
                  onClick={() => setShowInvoice(true)}
                  className=" bg-blue-500 m-10  text-white py-4  rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
                >
                  Preview Invoice
                </button>
              </main>
            </div>
          </>
        )}
      </main>
    </>
  );
}
