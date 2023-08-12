export default function SearchContainer({ placeholder, children }) {
  return (
    <>
      <div className="flex justify-evenly p-6 ">
        <input
          className="bg-[#F2F2F2] w-96  px-6 py-4 rounded-sm outline-none focus:ring-1 focus:ring-[#6ABD65] focus:border-[#498e45]"
          placeholder={placeholder}
        />
        <div className="  text-4xl flex items-center px-5   ">{children}</div>
      </div>
    </>
  );
}
