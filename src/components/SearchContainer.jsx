export default function SearchContainer({ placeholder, children, onChange }) {
  return (
    <>
      <div className="flex justify-center   ">
        <input
          type="text"
          onChange={onChange}
          className=" italic bg-[#F1F1F1] focus:ring-neutral-300 focus:border-neutral-500  w-64 h-11 border-none outline-none   px-6 py-4 rounded-sm  focus:ring-1 "
          placeholder={placeholder}
        />
        <div className="flex flex-col justify-evenly text-4xl">{children}</div>
      </div>
    </>
  );
}
