import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
export default function Img({ uploadedImg }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dxj8d8zrd",
    },
  });

  const myImage = cld.image(uploadedImg);

  myImage
    .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))
    .roundCorners(byRadius(20));
  return (
    <>
      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </>
  );
}
