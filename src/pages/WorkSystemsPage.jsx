// import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import InvoicePage from "../pages/InvoicePage";
import ProductImageTable from "../features/CRUD/ProductTable/ProductImageTable";
import CompanyList from "../features/CRUD/CompanyList/components/CompanyList";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import ProtectedWorkRoute from "../features/auth/components/ProtectedWorkRoute";
const WorkSystemsPage = () => {
  const [selectedTab, setSelectedTab] = useState("");
  const { t } = useTranslation();

  return (
    <ProtectedWorkRoute>
      <div>
        <main
          className="flex 
flex-col gap-3  mt-[-52px] justify-center w-full items-center  "
        >
          <main className="text-white mt-36 py-14  flex-col    w-full tracking-wider font-extrabold  flex justify-between gap-8  items-center text-[48px] ">
            <p> {t("Select job creation")}</p>

            <hr className="w-[78%]  border border-[#2D2D2D]" />
            <p className="text-base flex gap-6 items-baseline">
              <button
                onClick={() => setSelectedTab(t("InvoicePage"))}
                className={`border-[#2D2D2D] text-white   rounded-md outline-none border-2  hover:text-white hover:bg-[#2D2D2D] py-2 px-4 w-36   transition-all duration-100 ${
                  selectedTab === "InvoicePage"
                    ? "bg-[#2B2B2B] text-[#2D2D2D]"
                    : ""
                }`}
              >
                {t("Invoice")}
              </button>
              <button
                onClick={() => setSelectedTab(t("Product"))}
                className={`border-[#2D2D2D] text-white   rounded-md outline-none border-2  hover:text-white hover:bg-[#2D2D2D] py-2 px-4 w-36   transition-all duration-100 ${
                  selectedTab === "Product" ? "bg-[#2B2B2B] text-[#2D2D2D]" : ""
                }`}
              >
                {t("Company List")}
              </button>
              <button
                onClick={() => setSelectedTab(t("Image"))}
                className={`border-[#2D2D2D] text-white   rounded-md outline-none border-2  hover:text-white hover:bg-[#2D2D2D] py-2 px-4 w-44   transition-all duration-100 ${
                  selectedTab === "Image" ? "bg-[#2B2B2B] text-[#2D2D2D]" : ""
                }`}
              >
                {t("Product Table")}
              </button>
            </p>
          </main>

          <main className="flex justify-center w-[1540px]   ">
            {selectedTab === "InvoicePage" && <InvoicePage />}
            {selectedTab === "Product" && <CompanyList />}
            {selectedTab === "Image" && <ProductImageTable />}
          </main>
        </main>
      </div>
    </ProtectedWorkRoute>
  );
};

export default WorkSystemsPage;
