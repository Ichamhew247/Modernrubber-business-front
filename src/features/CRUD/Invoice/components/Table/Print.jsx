export default function Print() {
  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <ul className="flex space-x-7">
        <li>
          <button
            onClick={handlePrint}
            className="no-print bg-[#3a3022] mt-5   text-white py-2 px-8 rounded shadow border-2 border-[#3a3022] hover:bg-transparent hover:text-[#3a3022] transition-all duration-300"
          >
            Print
          </button>
        </li>
      </ul>
    </>
  );
}
