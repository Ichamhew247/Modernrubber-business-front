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
            className="no-print mt-5 bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Print
          </button>
        </li>
      </ul>
    </>
  );
}
