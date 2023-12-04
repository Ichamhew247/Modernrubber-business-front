import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCompanyListAsync,
  editCompanyListAsync,
  getCompanyListAsync,
} from "../slice/product-slice";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import SearchContainer from "../../../../components/SearchContainer";
import Modal from "../../../../components/Modal";
import AddInput from "../../Components/AddInput";
import ProductTableInput from "../../../CRUD/ProductTable/ProductTableInput";
import CompanyListContainer from "./CompanylistContainer";
export default function CompanyList() {
  const dispatch = useDispatch();
  const companyLists = useSelector((state) => state.companyLists.companyLists);
  console.log(companyLists);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentCompanyLists, setCurrentCompanyLists] = useState({});

  const [currentCompanyList, setCurrentCompanyList] = useState({});
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getCompanyListAsync());
  }, [dispatch]);

  const handleCloseModal = () => {
    setIsEditing(false);
    setOpen(false);
  };

  const handleEditClick = (companyList) => {
    setIsEditing(true);
    setCurrentCompanyList({
      id: companyList.id,
    });

    setCurrentCompanyLists({
      companyName: companyList.companyName,
      address: companyList.address,
      email: companyList.email,
      contactNumber: companyList.contactNumber,
      note: companyList.note,
    });
    setOpen(true); // Open the modal
  };

  const handleEditCompanyListChange = (e) => {
    setCurrentCompanyLists({
      ...currentCompanyLists,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProductSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editCompanyListAsync({
        id: currentCompanyList.id,
        companyName: currentCompanyLists.companyName,
        address: currentCompanyLists.address,
        email: currentCompanyLists.email,
        contactNumber: currentCompanyLists.contactNumber,
        note: currentCompanyLists.note,
      })
    );

    setIsEditing(false);
    setOpen(false); // Close the modal after submission
  };

  const handleDeleteClick = (id) => {
    console.log("Delete ID:", id);
    dispatch(deleteCompanyListAsync({ id: id }));
    console.log("Deee");
  };
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCompanyLists = companyLists.filter((companyList) => {
    if (companyList) {
      return (
        companyList.companyName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        companyList.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        companyList.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        companyList.contactNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        companyList.note.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return false; // Handle the case where companyList is undefined
  });

  return (
    <>
      {isEditing ? (
        <Modal
          title="Update Product"
          width="27"
          open={open}
          onClose={handleCloseModal}
          color="#3A3022"
        >
          <form
            onSubmit={handleEditProductSubmit}
            className="flex flex-col gap-4 mb-5"
          >
            <AddInput
              type="text"
              name="companyName"
              placeholder="companyName"
              value={currentCompanyLists.companyName}
              onChange={handleEditCompanyListChange}
            />
            <AddInput
              type="text"
              name="address"
              placeholder="address"
              value={currentCompanyLists.address}
              onChange={handleEditCompanyListChange}
            />
            <AddInput
              type="text"
              name="email"
              placeholder="email"
              value={currentCompanyLists.email}
              onChange={handleEditCompanyListChange}
            />
            <AddInput
              type="text"
              name="contactNumber"
              placeholder="contactNumber"
              value={currentCompanyLists.contactNumber}
              onChange={handleEditCompanyListChange}
            />
            <AddInput
              type="text"
              name="note"
              placeholder="note"
              value={currentCompanyLists.note}
              onChange={handleEditCompanyListChange}
            />
            <button
              type="submit"
              className="h-11 text-center rounded-full hover:bg-zinc-800  hover:text-white text-zinc-800 border-2 border-zinc-800 transition-all duration-300"
            >
              Confirm
            </button>
          </form>
        </Modal>
      ) : null}
      <main className=" flex flex-col mb-96">
        <main className="flex justify-between items-center m-auto w-[980px] ">
          <div className="flex gap-2 ">
            <SearchContainer
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder=""
            />
          </div>
          <div className=" py-2  cursor-pointer transition-all duration-300 rounded ">
            <CompanyListContainer />
          </div>
        </main>
        <main className=" flex flex-col m-auto w-[980px] ">
          <table className="bg-white border-collapse  table-fixed w-[980px]  mt-2 border text-center">
            <thead className="bg-[#2D2D2D] font-medium text-white  ">
              <tr>
                <th className="font-medium w-12 h-12 border border-[#2D2D2D] ">
                  Order
                </th>
                <th className="font-medium border border-[#2D2D2D]">
                  Company Name
                </th>
                <th className="font-medium border border-[#2D2D2D]">Address</th>
                <th className="font-medium border border-[#2D2D2D]">Email</th>
                <th className="font-medium border border-[#2D2D2D]">
                  Contact Number
                </th>
                <th className="font-medium border border-[#2D2D2D]">Note</th>
                <th className="font-medium border border-[#2D2D2D]">Edit</th>
              </tr>
            </thead>

            <tbody>
              {filteredCompanyLists.length > 0 &&
                filteredCompanyLists.map((companyList, index) => (
                  <tr key={index}>
                    <td className="p-4 border-b-2 border-white">{index + 1}</td>
                    <ProductTableInput companyList={companyList.companyName} />
                    <ProductTableInput companyList={companyList.address} />
                    <ProductTableInput companyList={companyList.email} />
                    <ProductTableInput
                      companyList={companyList.contactNumber}
                    />
                    <ProductTableInput companyList={companyList.note} />
                    <td className="border-b-2 border-white">
                      {isEditing ? (
                        <form className="flex gap-6 justify-center">
                          <div
                            onClick={() => {
                              handleEditClick(companyList);
                              setOpen(true);
                            }}
                            className="flex justify-end gap-4 py-2 cursor-pointer transition-all duration-300 rounded"
                          >
                            <div
                              className="hover:bg-zinc-800 hover:text-white
                          items-baseline rounded flex gap-4 p-2 transition-all
                          duration-300 text-xl "
                            >
                              <AiFillEdit className="editIcon" />
                            </div>
                          </div>

                          <div
                            onClick={() => handleDeleteClick(companyList.id)}
                            className="cursor-pointer hover:bg-zinc-800 hover:text-white
                          items-center rounded flex gap-4 p-2 transition-all
                          duration-300 text-xl"
                          >
                            <AiFillDelete className="deleteIcon" />
                          </div>
                        </form>
                      ) : (
                        <div
                          onClick={() => {
                            setIsEditing(true);
                          }}
                          className="hover:text-black text-[#3e3e3e]
                      items-baseline rounded flex gap-4 p-2 transition-all
                      duration-300 cursor-pointer text-xl justify-center"
                        >
                          <AiFillEdit />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              {companyLists.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center text-sm h-44">
                    No data information
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
      </main>
    </>
  );
}
