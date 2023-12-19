import { createPortal } from "react-dom";

export default function Modal({
  title,
  children,
  width = 27,
  open,
  onClose,
  color,
}) {
  return createPortal(
    <>
      {open && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-slate-200 opacity-70 z-10"></div>
          <div className=" fixed inset-0 z-50  " onMouseUp={onClose}>
            <div className=" flex justify-center  items-center min-h-full p-4">
              <div
                style={{ maxWidth: `${width}rem`, color: color }}
                className="  bg-white 
                xl:w-full
                lg:w-full
                md:w-full
                sm:w-full
                xs:w-80
                
                
                border   rounded-sm max-w-md shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col  max-h-[calc(100vh-2rem)] "
                onMouseUp={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between p-8  text-xl">
                  <div className="invisible ">&#10005;</div>
                  <div className="text-4xl  font-bold">{title}</div>

                  <div
                    className="flex -mt-4  text-[#3E3E3E] hover:text-[#2D2D2D] font-semibold "
                    role="button"
                    onClick={onClose}
                  >
                    &#10005;
                  </div>
                </div>

                <div className="px-4  overflow-auto">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,
    document.getElementById("modal")
  );
}
