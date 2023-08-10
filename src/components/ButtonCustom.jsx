export default function ButtonCustom({
  textButton = "Button",
  width,
  Height,
  backgroundColor = "#6ABD65",
  color = "white",
}) {
  return (
    <>
      <div
        style={{
          maxWidth: `${width}px`,
          minHeight: `${Height}px`,
          backgroundColor: backgroundColor,
          color: color,
        }}
        className="text-center rounded-full  "
      >
        {textButton}
      </div>
    </>
  );
}
