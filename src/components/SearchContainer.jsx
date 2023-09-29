export default function SearchContainer({ placeholder, children }) {
  return (
    <>
      <div className="flex justify-center   ">
        <input
          className="bg-[#F2F2F2] w-96 border-2 border-[#8A4819] hover:border-[]  px-6 py-4 rounded-sm outline-none focus:ring-1 focus:ring-[#3A3022] focus:border-[#8A4819]"
          placeholder={placeholder}
        />
        <div className="  text-4xl flex items-center px-5   ">{children}</div>
      </div>
    </>
  );
}
