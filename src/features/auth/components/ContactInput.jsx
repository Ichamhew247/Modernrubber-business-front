import createClasses from "../../../utils/create-classes";

export default function ContactInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const defaultClassName =
    // "block w-full rounded-md border px-3 py-1.5 outline-none text-sm focus:ring leading-6 tracking-wide   ";
    "bg-[#F2F2F2] w-96  px-6 py-4 rounded-sm outline-none focus:ring-1 focus:ring-[#6ABD65] focus:border-[#498e45]";
  const className = createClasses(
    defaultClassName,
    isInvalid
      ? "border-green-500 focus:ring-green-300"
      : "border-green-300 focus:ring-green-300 focus:border-green-500"
  );
  return (
    <div>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
