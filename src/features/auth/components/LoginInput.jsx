import createClasses from "../../../utils/create-classes";

export default function RegisterInput({
  type,
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const defaultClassName =
    "block w-full border  rounded-md px-4 py-3 outline-none focus:ring-1  ";
  const className = createClasses(
    defaultClassName,
    isInvalid
      ? " "
      : "border-gray-300 focus:ring-[#6ABD65] focus:border-[#498e45]"
  );
  return (
    <div>
      <input
        type={type}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
