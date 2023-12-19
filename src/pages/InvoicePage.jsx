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
import { useTranslation } from "react-i18next";
import "/src/components/DatePicker.css";

export default function InvoicePage() {
  const { t } = useTranslation();
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
      <main
        className="bg-white 
      xl:w-[800px]
      lg:w-[800px]
      md:w-[700px]
      sm:w-[580px]
      xs:w-[400px]
      flex  flex-col justify-between m-5 p-12  xl:max-w-4xl xl:mx-auto rounded shadow"
      >
        {showInvoice ? (
          <div className="">
            <div className="items-center  mt-6">
              <HeadName
                name={name}
                address={address}
                email={email}
                companyTel={companyTel}
              />
            </div>
            <br />

            <hr className="w-10/12 m-auto" />

            <div className="flex justify-center text-xl   tracking-wide mt-6 ">
              <Topic />
            </div>
            <div
              className="flex text-xs  items-center
            xl:w-[580px] 
            lg:w-[580px] 
            md:w-[580px] 
            justify-end  
            gap-2 "
            >
              <div>{t("Date")}</div>
              <div>{dateOutside || "-"}</div>
            </div>

            <section className=" flex justify-between   ">
              <div>
                <h2>
                  <ClientName client={client} descript={descript} />
                </h2>
              </div>
            </section>
            <div>
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
                {t("Edit Information")}
              </button>
              <div>
                <Print />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center mr-4 ">
              <div className="text-4xl m-auto mb-7">{t("Invoice")}</div>
              <main id="myHead">
                <main
                  className=" w-[700px] 
                xl:flex xl:flex-row 
                lg:flex lg:flex-row 
                md:flex md:flex-col
                
                mb-3 gap-6 ml-z"
                >
                  <main
                    className="flex items-baseline 
                
                    "
                  >
                    <div>{t("Date")}</div>

                    <DateTableInput setDateOutside={setDateOutside} />
                  </main>
                  <main
                    className="flex items-baseline  
                    xl:w-fit 
                    lg:w-fit 
                    md:w-[300px]
                    sm:w-[482px]
                    xs:w-[0px]
                    "
                  >
                    <div>{t("Invoice date :")}</div>
                    <div>
                      <DatesInput setDateInside={setDateInside} />
                    </div>
                  </main>
                </main>
                <div
                  className="flex
                  xl:flex-row xl:items-baseline 
                  lg:flex-row  lg:items-baseline 
                  md:flex-row  md:items-baseline 
                  sm:flex-row  sm:items-baseline 
                  xs:flex-col
                  xs:gap-0
                  xs:ml-[0px] gap-4
             
                 "
                >
                  <div>{t("Customer's name")}</div>
                  <InputClient client={client} setClient={setClient} />
                </div>

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
                  className=" bg-[#3E3E3E] mt-10 mb-2 text-white py-4 hover:bg-black  rounded shadow border-2 border-[#3E3E3E]  hover:text-white transition-all duration-300"
                >
                  {t("Preview Invoice")}
                </button>
              </main>
            </div>
          </>
        )}
      </main>
    </>
  );
}
