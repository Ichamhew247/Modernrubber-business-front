import { useState } from "react";
import Print from "../features/CRUD/Invoice/components/Table/Print";
import Signature from "../features/CRUD/Invoice/components/Signature/Signature";
import Topic from "../features/CRUD/Invoice/components/Header/Topic";
import HeadName from "../features/CRUD/Invoice/components/Header/HeadName";
import HeadNameInput from "../features/CRUD/Invoice/components/Header/HeadInput";
import ClientName from "../features/CRUD/Invoice/components/ClientName/ClientName";
import InputClient from "../features/CRUD/Invoice/components/ClientName/InputClient";
import TableName from "../features/CRUD/Invoice/components/Table/TableName";
import TodoForm from "../features/CRUD/Invoice/components/Todo/TodoForm";
import DatesInput from "../features/CRUD/Invoice/components/Date/DatesInput";
import DateTableInput from "../features/CRUD/Invoice/components/Date/DateTableInput";
import "/src/components/DatePicker.css";

export default function Invoice() {
  const [todos, setTodos] = useState([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [client, setClient] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [companyTel, setCompanyTel] = useState("");
  const [descript, setDescript] = useState("");
  const [dateOutside, setDateOutside] = useState("");
  const [dateInside, setDateInside] = useState("");
  return (
    <>
      <main className="bg-white  flex flex-col justify-between m-5 p-12  xl:max-w-4xl xl:mx-auto rounded shadow">
        {showInvoice ? (
          <div>
            <div
              className="items-center  mt-6
              "
            >
              <HeadName
                name={name}
                address={address}
                email={email}
                companyTel={companyTel}
              />
            </div>
            <br />

            <hr className="w-10/12 m-auto" />

            <div className="flex justify-center text-xl font-semibold  tracking-wide mt-6 ">
              <Topic />
            </div>
            <div className="flex items-center w-[580px] justify-end  gap-2 ">
              <div>วันที่ :</div>
              <div className="text-sm ">{dateOutside || "-"}</div>
            </div>

            <section className=" flex justify-between   ">
              <div>
                <h2>
                  <ClientName client={client} descript={descript} />
                </h2>
              </div>
            </section>
            <div className=" ">
              <TableName
                dateInside={dateInside}
                setTodos={setTodos}
                todos={todos}
              />
            </div>

            <div>
              <Signature />
            </div>
            <div className=" flex  items-center justify-center gap-8  -mt-9 overflow-hidden">
              <button
                onClick={() => setShowInvoice(false)}
                className="no-print bg-[#3a3022] mt-5   text-white py-2 px-8 rounded shadow border-2 border-[#3a3022] hover:bg-transparent hover:text-[#3a3022] transition-all duration-300"
              >
                Edit Information
              </button>
              <div>
                <Print />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center mr-4 ">
              <div className="text-4xl m-auto mb-7">ใบวางบิล</div>
              <main id="myHead">
                <main className=" w-[700px] flex mb-3 gap-6 ml-z">
                  <main className="flex items-baseline">
                    <div>วันที่ :</div>

                    <DateTableInput setDateOutside={setDateOutside} />
                  </main>
                  <main className="flex items-baseline">
                    <div>วันที่ออกใบกำกับภาษี :</div>
                    <div>
                      <DatesInput setDateInside={setDateInside} />
                    </div>
                  </main>
                </main>
                <InputClient client={client} setClient={setClient} />

                <main>
                  <TodoForm setTodos={setTodos} todos={todos} />
                </main>
              </main>
              <main className="flex flex-col ml-5">
                <HeadNameInput
                  setName={setName}
                  name={name}
                  setAddress={setAddress}
                  address={address}
                  setEmail={setEmail}
                  email={email}
                  setCompanyTel={setCompanyTel}
                  companyTel={companyTel}
                  setDescript={setDescript}
                  descript={descript}
                />
                <button
                  onClick={() => setShowInvoice(true)}
                  className=" bg-[#3a3022] mt-10 mb-2 text-white py-4  rounded shadow border-2 border-[#3a3022] hover:bg-transparent hover:text-[#3a3022] transition-all duration-300"
                >
                  Preview Invoice
                </button>
                <button className=" bg-[#3a3022]  text-white p-4  rounded shadow border-2 border-[#3a3022] hover:bg-transparent hover:text-[#3a3022] transition-all duration-300">
                  Save draft
                </button>
              </main>
            </div>
          </>
        )}
      </main>
    </>
  );
}
