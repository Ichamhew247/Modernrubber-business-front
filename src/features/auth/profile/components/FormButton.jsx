export default function FormButton({ children, onClick }) {
  return (
    <>
      <button
        className="px-2.5 py-1.5 rounded text-blue-600 font-medium hover:bg-gray-100 transition-all duration-300"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
