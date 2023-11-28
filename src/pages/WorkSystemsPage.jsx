import { useState } from "react";
import InvoicePage from "../pages/InvoicePage";
import ProductImageTable from "../features/CRUD/Products/components/ProductImageTable";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import CompanyList from "../features/CRUD/Products/components/CompanyList";
export default function WorkSystems() {
  const [selectedTab, setSelectedTab] = useState("image"); // ให้มีค่าเริ่มต้นเป็น "image"

  return (
    <>
      <ProtectedRoute>
        <main className="mt-[150px]">
          <div className="no-print flex justify-center text-xl mb-8 font-bold ">
            เลือกการทำงานที่ต้องการ
          </div>
          <div className="no-print flex justify-center gap-5 ">
            <button
              onClick={() => setSelectedTab("invoice")}
              className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
                selectedTab === "invoice" ? "bg-[#3c3224]" : ""
              }`}
            >
              Invoice
            </button>

            <button
              onClick={() => setSelectedTab("product")}
              className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
                selectedTab === "product" ? "bg-[#3c3224]" : ""
              }`}
            >
              Company list
            </button>
            <button
              onClick={() => setSelectedTab("image")}
              className={`bg-[#8A4819] hover:bg-[#3A3022] py-2 px-4 w-36 rounded-full text-white transition-all duration-300 ${
                selectedTab === "image" ? "bg-[#3c3224]" : ""
              }`}
            >
              Product table
            </button>
          </div>
          <hr className="m-5" />

          {selectedTab === "product" && <CompanyList />}
          {selectedTab === "invoice" && <InvoicePage />}
          {selectedTab === "image" && <ProductImageTable />}
        </main>
      </ProtectedRoute>
    </>
  );
}
