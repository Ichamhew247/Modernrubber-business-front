import { BiSolidPencil } from "react-icons/bi";
import Avatar from "../../../../components/Avatar";
import Modal from "../../../../components/Modal";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";
// import { useSelector } from "react-redux";
// import EditProfileForm from "./EditProfileForm";

export default function ProfileContainer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Avatar className="h-[10.5rem] w-[10.5rem] ring ring-white" />
      <button
        className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2">
          <BiSolidPencil />
          <span className="font-semibold ">Edit Profile</span>
        </div>
      </button>
      <Modal
        title="Edit profile"
        open={open}
        onClose={() => setOpen(false)}
        width="44"
      >
        <EditProfileForm />
      </Modal>
    </>
  );
}
