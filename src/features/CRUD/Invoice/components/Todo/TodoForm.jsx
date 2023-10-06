import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { MdCancelPresentation } from "react-icons/md";
import { BiSave } from "@react-icons/all-files/bi/BiSave";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsync,
  deleteTodoAsync,
  editTodoAsync,
} from "../../slice/todo-slice";

export default function TodoForm() {
  const [taxInput, setTaxInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [currentTodo, setCurrentTodo] = useState({});

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleDeleteClick = (id) => {
    dispatch(deleteTodoAsync({ id: id }));
  };

  const handleInputChangeTax = (e) => {
    setTaxInput(e.target.value);
  };

  const handleInputChangePrice = (e) => {
    setPriceInput(e.target.value);
  };

  const handleEditInputChange = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      addTodoAsync({
        taxValue: taxInput,
        priceValue: priceInput,
      })
    );
    setTaxInput("");
    setPriceInput("");
    console.log("finish");
  };
  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editTodoAsync({
        id: currentTodo.id,
        taxValue: currentItem.tax,
        priceValue: currentItem.price,
      })
    );
    setCurrentItem("");
    console.log("Editfinish");
    setIsEditing(false);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo({
      id: todo.id,
    });

    setCurrentItem({
      tax: todo.taxValue,
      price: todo.priceValue,
    });
  };

  return (
    <div>
      {isEditing ? (
        <form
          onSubmit={handleEditFormSubmit}
          className="flex items-center gap-4 p-3 "
        >
          <div className="ml-6">แก้ไข :</div>
          <div className="flex  ">
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
          <div className="flex  gap-4">
            <button
              type="submit"
              className=" hover:bg-[#3a3022] p-1  rounded-lg  text-3xl transition-all duration-300 "
            >
              <BiSave className="addIcon" />
            </button>
            <button
              onClick={() => {
                setIsEditing(false), setCurrentItem("");
              }}
              className=" hover:bg-[#3a3022] p-1  rounded-lg  text-3xl transition-all duration-300 "
            >
              <MdCancelPresentation className="addIcon" />
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={handleSubmitForm}
          className="flex  gap-5 items-center ml-2 "
        >
          <div>รายละเอียด:</div>
          <input
            id="tax"
            type="text"
            name="tax"
            value={taxInput}
            placeholder="Add a tax"
            onChange={handleInputChangeTax}
          />
          <input
            id="price"
            type="text"
            name="price"
            value={priceInput}
            placeholder="Add a price"
            onChange={handleInputChangePrice}
          />
          <button className=" hover:bg-[#3a3022]  rounded-3xl  text-4xl transition-all duration-300 ">
            <IoIosAddCircle className="addIcon" />
          </button>
        </form>
      )}

      <table className="table-fixed w-[600px]  m-auto border-collapse text-center ">
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
                    <main className="flex justify-center ">
                      <button
                        className="flex p-2  rounded-xl w-10 h-10 text-2xl  hover:bg-[#3A3022] transition-all duration-300"
                        onClick={() => handleDeleteClick(todo.id)}
                      >
                        <AiFillDelete className="deleteIcon " />
                      </button>
                    </main>
                  ) : (
                    <main className="flex justify-center">
                      <button
                        onClick={() => handleEditClick(todo)}
                        className=" flex p-2  rounded-xl w-10 h-10 text-2xl hover:bg-[#3A3022] transition-all duration-300"
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
