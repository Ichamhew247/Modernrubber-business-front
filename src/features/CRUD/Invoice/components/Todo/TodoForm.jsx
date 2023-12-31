import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import { BiSave } from "@react-icons/all-files/bi/BiSave";
import { v4 as uuidv4 } from "uuid";

export default function TodoForm({ setTodos, todos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    id: null,
    tax: "",
    price: "",
  });

  const handleDeleteClick = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEditInputChange = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    // เพิ่มสินค้าใหม่
    const newTodo = {
      id: uuidv4(),
      taxValue: currentItem.tax,
      priceValue: currentItem.price,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setCurrentItem({ id: null, tax: "", price: "" });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    // แก้ไขสินค้าโดยอ้างอิง id
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === currentItem.id) {
          return {
            ...todo,
            taxValue: currentItem.tax,
            priceValue: currentItem.price,
          };
        }
        return todo;
      })
    );
    setCurrentItem({ id: null, tax: "", price: "" });
    setIsEditing(false);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentItem({
      id: todo.id,
      tax: todo.taxValue,
      price: todo.priceValue,
    });
  };

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={handleEditFormSubmit}
          className="flex items-center gap-4 p-3"
        >
          <div className="ml-6">แก้ไข :</div>
          <div className="flex">
            <input
              type="text"
              name="tax"
              placeholder="Edit tax"
              value={currentItem.tax}
              onChange={handleEditInputChange}
              className="p-2 w-44"
            />
            <input
              id="price"
              type="text"
              name="price"
              placeholder="Edit price"
              value={currentItem.price}
              onChange={handleEditInputChange}
              className="p-2 w-44"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="hover:bg-[#3a3022] p-1 rounded-lg text-3xl transition-all duration-300"
            >
              <BiSave className="addIcon" />
            </button>
            <button
              onClick={() => {
                setIsEditing(false);
                setCurrentItem({ id: null, tax: "", price: "" }); // ล้างค่าหลังจากยกเลิกแก้ไข
              }}
              className="hover:bg-[#3a3022] p-1 rounded-lg text-3xl transition-all duration-300"
            >
              <MdCancelPresentation className="addIcon" />
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmitForm}
          className="flex gap-5 items-center ml-2"
        >
          <div>รายละเอียด:</div>
          <input
            id="tax"
            type="text"
            name="tax"
            value={currentItem.tax}
            placeholder="Add a tax"
            onChange={handleEditInputChange}
          />
          <input
            id="price"
            type="text"
            name="price"
            value={currentItem.price}
            placeholder="Add a price"
            onChange={handleEditInputChange}
          />
          <button className="hover:bg-[#3a3022] rounded-3xl text-4xl transition-all duration-300">
            <IoIosAddCircle className="addIcon" />
          </button>
        </form>
      )}

      <table className="table-fixed w-[600px] m-auto border-collapse text-center">
        <thead>
          <tr>
            <th className="p-3 text-sm">เลขที่ใบกำกับภาษี</th>
            <th>จำนวนเงิน</th>
            <th>แก้ไข</th>
          </tr>
        </thead>
        <tbody>
          {todos ? (
            todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.taxValue}</td>
                <td>{todo.priceValue}</td>
                <td>
                  {isEditing ? (
                    <main className="flex justify-center">
                      <button
                        className="flex p-2 rounded-xl w-10 h-10 text-2xl hover:bg-[#3A3022] transition-all duration-300"
                        onClick={() => handleDeleteClick(todo.id)}
                      >
                        <AiFillDelete className="deleteIcon" />
                      </button>
                    </main>
                  ) : (
                    <main className="flex justify-center">
                      <button
                        onClick={() => handleEditClick(todo)}
                        className="flex p-2 rounded-xl w-10 h-10 text-2xl hover:bg-[#3A3022] transition-all duration-300"
                      >
                        <AiFillEdit className="editIcon" />
                      </button>
                    </main>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Error +_+</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
