import PictureForm from "./PictureForm";
import * as userService from "../../api/product-api";
import { useState } from "react";
import Loading from "../Loading";
import { useDispatch } from "react-redux";
import ProductImage from "./ProductImage";
import { updateProductImage } from "../../features/CRUD/Products/slice/product-slice";
export default function UploadProductImageForm() {
  //No redux this time
  const [isloading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const updateProductImageInComponent = async (input) => {
    const formData = new FormData();
    formData.append("productImage", input);
    setIsLoading(true);
    const res = await userService.uploadProduct(formData);
    setIsLoading(false);
    dispatch(updateProductImage(res.data.productImage));
  };

  return (
    <>
      {isloading && <Loading />}
      <main className="w-[800px] bg-yellow-100">
        <div className="flex flex-col gap-4">
          <PictureForm
            onSave={updateProductImageInComponent}
            title="Product Image"
            // initialSrc={products.productImage}
          >
            {(src) => (
              <div className="aspect-[1096/404] overflow-hidden flex justify-center items-center rounded-lg">
                <ProductImage src={src} />
              </div>
            )}
          </PictureForm>
        </div>
      </main>
    </>
  );
}
