export default function ButtonCustom({
  textButton,
  width,
  Height,
  backgroundColor,
}) {
  return (
    <>
      <div
        style={{
          maxWidth: `${width}px`,
          minHeight: `${Height}px`,
          backgroundColor: backgroundColor,
        }}
        className="text-center rounded-full  "
      >
        {textButton}
      </div>
    </>
  );
}
