export default function DatesName({ day }) {
  return (
    <>
      <div>{day}</div>
      {/* <div>{day || formattedDate}</div> */}
    </>
  );
}
// function DatesNow() {
//   // สร้างวันที่ปัจจุบัน
//   const currentDate = new Date();

//   // ใช้ toLocaleDateString โดยระบุเฉพาะวันที่และเดือน
//   const formattedDate = currentDate.toLocaleDateString(undefined, {
//     day: "numeric",
//     month: "numeric",
//     year: "numeric",
//   });
//   return <div>{formattedDate}</div>;
// }
