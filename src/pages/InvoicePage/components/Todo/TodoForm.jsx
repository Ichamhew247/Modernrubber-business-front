import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";
import { BiSave } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoAsync,
  // deleteTodoAsync,
  editTodoAsync,
} from "../../slice/todo-slice";

export default function TodoForm() {
  const [taxInput, setTaxInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  // const [currentTodo, setCurrentTodo] = useState({}); // Define currentTodo state

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  // const handleDeleteClick = (id) => {
  //   dispatch(deleteTodoAsync({ id: id }));
  // };

  const handleInputChangeTax = (e) => {
    setTaxInput(e.target.value);
  };

  const handleInputChangePrice = (e) => {
    setPriceInput(e.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      addTodoAsync({
        taxValue: taxInput,
        priceValue: priceInput,
      })
    );
    // Clear input fields after adding
    setTaxInput("");
    setPriceInput("");
    console.log("finish");
  };

  const handleEditInputChange = (e) => {
    setCurrentItem({
      ...currentItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    // Dispatch the editTodoAsync action with updated data
    dispatch(
      editTodoAsync({
        // id: currentTodo.id,
        taxValue: currentItem.tax,
        priceValue: currentItem.price,
      })
    );

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
          <div className="flex  ">
            <button
              type="submit"
              className=" font-normal py-2 px-4 rounded text-3xl   hover:bg-gray-300 "
            >
              <BiSave style={{ color: "orange" }} />
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className=" py-2 px-4 rounded text-base hover:bg-gray-300  "
            >
              ยกเลิก
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
          <button className="   rounded-3xl  text-4xl  ">
            <IoIosAddCircle style={{ color: "orange" }} />
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
                  {" "}
                  {isEditing ? (
                    <main className="flex justify-center ">
                      <button
                        className=" py-2 px-8 rounded text-lg  hover:bg-gray-200 "
                        onClick={() => handleDeleteClick(todo.id)}
                      >
                        <AiFillDelete style={{ color: "red" }} />
                      </button>
                    </main>
                  ) : (
                    <main className="flex justify-center">
                      <button
                        onClick={() => {
                          setIsEditing(true);
                          handleEditClick(todo);
                        }}
                        className="h py-2 px-8 rounded text-lg  hover:bg-gray-200"
                      >
                        <AiFillEdit style={{ color: "orange" }} />
                      </button>
                    </main>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No todos available.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
