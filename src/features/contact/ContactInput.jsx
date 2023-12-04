import createClasses from "../../utils/create-classes";

export default function ContactInput({
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const defaultClassName =
    "bg-[#F2F2F2] xs:w-[300px] sm:w-[360px] md:w-96 lg:w-96 xl:w-96 sm:h-8 md:h-10 lg:h-12 xl:h-12  px-6 py-4 rounded-sm outline-none focus:ring-1 focus:ring-[#6ABD65] focus:border-[#498e45]";
  const className = createClasses(
    defaultClassName,
    isInvalid
      ? "border-green-500 focus:ring-green-300"
      : "border-gray-300 focus:ring-neutral-300 focus:border-neutral-500"
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
