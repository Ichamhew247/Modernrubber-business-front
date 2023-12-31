import Avatar from "../../../../components/Avatar";
import PictureForm from "./PictureForm";
import * as userService from "../../../../api/user-api";
import { useDispatch } from "react-redux";
import { updateProfileImage as updateAction } from "../../slice/auth-slice";
export default function EditProfileForm() {
  const dispatch = useDispatch();

  const updateProfileImage = async (input) => {
    const formData = new FormData();
    formData.append("profileImage", input);
    const res = await userService.updateUserImage(formData);
    dispatch(updateAction(res.data.profileImage));
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <PictureForm onSave={updateProfileImage} title="Profile Image">
          {(src) => (
            <div className="flex justify-center">
              <Avatar
                src={src}
                alt="user"
                className="h-[10.5rem] w-[10.5rem]"
              />
            </div>
          )}
        </PictureForm>
      </div>
    </>
  );
}
