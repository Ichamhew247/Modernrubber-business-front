import createClasses from "../../../utils/create-classes";

export default function LoginInput({
  type,
  placeholder,
  value,
  onChange,
  name,
  isInvalid,
}) {
  const defaultClassName =
    "block border rounded-none xs:w-[300px] md:w-[566px] sm:w-[566px] lg:w-[566px] xl:w-[566px] outline-none focus:ring-1 ring-1 ring-[#2D2D2D] ";
  const className = createClasses(
    defaultClassName,
    isInvalid
      ? " "
      : "border-gray-300 focus:ring-[#3E3E3E] focus:border-[#2D2D2D]"
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
