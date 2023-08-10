export default function RegisterInput({ placeholder }) {
  return (
    <>
      <input
        type="text"
        className="block w-full border border-gray-300 rounded-md px-4 py-3 outline-none focus:ring-1 focus:ring-[#6ABD65] focus:border-[#498e45]"
        placeholder={placeholder}
      />
    </>
  );
}
