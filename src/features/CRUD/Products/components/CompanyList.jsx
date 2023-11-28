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
import ProductInput from "./ProductInput";
import AddCompanylist from "./Addproduct/AddCompanylist";
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
            <ProductInput
              type="text"
              name="companyName"
              placeholder="companyName"
              value={currentCompanyLists.companyName}
              onChange={handleEditCompanyListChange}
            />
            <ProductInput
              type="text"
              name="address"
              placeholder="address"
              value={currentCompanyLists.address}
              onChange={handleEditCompanyListChange}
            />
            <ProductInput
              type="text"
              name="email"
              placeholder="email"
              value={currentCompanyLists.email}
              onChange={handleEditCompanyListChange}
            />
            <ProductInput
              type="text"
              name="contactNumber"
              placeholder="contactNumber"
              value={currentCompanyLists.contactNumber}
              onChange={handleEditCompanyListChange}
            />
            <ProductInput
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

      <main className="flex justify-between items-center m-auto w-[980px] ">
        <div className="flex gap-2 ">
          <SearchContainer
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="ค้นหาข้อมูลลูกค้า"
          />
        </div>
        <div className="a py-2  cursor-pointer transition-all duration-300 rounded ">
          <AddCompanylist />
        </div>
      </main>
      <main className="flex flex-col m-auto w-[980px] ">
        <table className="bg-white table-fixed w-[980px]  mt-2 border-collapse border text-center">
          <thead className="bg-[#3a3022] font-medium text-white  ">
            <tr>
              <th className="font-medium w-12 h-12 ">Order</th>
              <th className="font-medium">Company Name</th>
              <th className="font-medium">Address</th>
              <th className="font-medium">Email</th>
              <th className="font-medium">Contact Number</th>
              <th className="font-medium">Note</th>
              <th className="font-medium">Edit</th>
            </tr>
          </thead>

          <tbody className="border-b dark:border-neutral-500">
            {filteredCompanyLists.length > 0 &&
              filteredCompanyLists.map((companyList, index) => (
                <tr key={index}>
                  <td className="h-4">{index + 1}</td>
                  <td> {companyList.companyName}</td>
                  <td> {companyList.address}</td>
                  <td> {companyList.email}</td>
                  <td> {companyList.contactNumber}</td>
                  <td> {companyList.note}</td>

                  <td>
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
                          duration-300 text-xl"
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
                        className="hover:text-zinc-800 text-[#8A4819]
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
                <td colSpan="6" className="text-center text-sm h-44">
                  No data information
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </main>
    </>
  );
}
