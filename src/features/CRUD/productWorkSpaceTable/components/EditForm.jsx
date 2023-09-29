import ProductInput from "../../../../features/CRUD/Products/components/ProductInput";

export default function EditForm({
  currentProducts,
  onFieldChange,
  onEditFormSubmit,
}) {
  return (
    <>
      <form
        onSubmit={(e) => onEditFormSubmit(e, currentProducts)}
        className="text-sm flex flex-col"
      >
        <div>
          <div>ชื่อสินค้า:</div>
          <ProductInput
            type="text"
            name="nameProduct"
            placeholder="ชื่อสินค้า"
            onChange={(e) => onFieldChange("nameProduct", e.target.value)}
            value={currentProducts.nameProduct}
            className="p-2 "
            // isInvalid={}
          />
        </div>
        <div>
          <div>ชื่อสินค้าอื่น ๆ:</div>

          <ProductInput
            type="text"
            name="nameProductEtc"
            placeholder="ชื่อสินค้าอื่น ๆ"
            onChange={(e) => onFieldChange("nameProductEtc", e.target.value)}
            value={currentProducts.nameProductEtc}
            className="p-2"
          />
        </div>
        <div>
          <div> รายละเอียดสินค้า:</div>

          <ProductInput
            type="text"
            name="description"
            placeholder="รายละเอียดสินค้า"
            onChange={(e) => onFieldChange("description", e.target.value)}
            value={currentProducts.description}
            className="p-2 "
          />
        </div>
        <div>
          <div> ประเภทสินค้า:</div>

          <ProductInput
            type="text"
            name="type"
            placeholder="ประเภทสินค้า"
            onChange={(e) => onFieldChange("type", e.target.value)}
            value={currentProducts.type}
            className="p-2"
          />
        </div>
        <div>
          <div> รายละเอียดสินค้า:</div>

          <ProductInput
            type="text"
            name="price"
            placeholder="รายละเอียดสินค้า"
            onChange={(e) => onFieldChange("price", e.target.value)}
            value={currentProducts.price}
            className="p-2 "
          />
        </div>
        <div>
          <div> รูปภาพสินค้า:</div>

          <ProductInput
            type="text"
            name="image"
            placeholder="รูปภาพสินค้า"
            onChange={(e) => onFieldChange("image", e.target.value)}
            value={currentProducts.image}
            className="p-2"
          />
        </div>
        <button type="submit" className="transition-all duration-300">
          saveEdited
        </button>
        <button className="transition-all duration-300">ยกเลิกการแก้ไข</button>
      </form>
    </>
  );
}
