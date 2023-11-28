import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosCloseCircle } from "react-icons/io";
export default function AddLine() {
  const [open, setOpen] = useState(true);
  const { t } = useTranslation();
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <>
          <div
            onClick={handleClick}
            className="cursor-pointer font-semibold  flex justify-center no-print z-50 fixed top-[610px]  right-2   shadow-2xl"
          >
            <IoIosCloseCircle className=" text-2xl " />
          </div>
          <div className="flex justify-center no-print z-10    fixed top-[620px]  right-4  shadow-2xl">
            <a href="https://lin.ee/c866PiB">
              <img
                className="w-40 "
                src={t("AddLineLink")}
                alt={t("AddLineLink")}
              />
            </a>
          </div>
        </>
      )}
    </>
  );
}
