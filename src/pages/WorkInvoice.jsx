// import { useState } from "react";
import InvoicePage from "../pages/InvoicePage";
function WorkInvoice() {
  //   const [openInvoice, setOpenInvoice] = useState(false);
  return (
    <>
      <main className=" mt-[150px]">
        {/* <div className="no-print flex justify-center text-xl mb-8 font-bold ">
          เลือกการทำงานที่ต้องการ
        </div>
        <div className="no-print flex justify-center gap-5 ">
          <button
            onClick={() => {
              setOpenInvoice(true);
            }}
            className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
              openInvoice ? "bg-[#3c3224]" : ""
            }`}
          >
            Invoice
          </button>
        </div> */}
        <InvoicePage />
      </main>
    </>
  );
}

export default WorkInvoice;
