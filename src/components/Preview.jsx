import DUMMY_BOOKS from "../../DUMMY_DATA";
import { useState } from "react";

import NewPostForm from "./NewPostForm";
import Post from "./Post";

export default function Preview({ addModal, onCancel }) {
  const [enteredValue, setEnteredValue] = useState(DUMMY_BOOKS);

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookname = formData.get("book-name");
    const author = formData.get("author");
    const review = formData.get("review");
    setEnteredValue((prev) => [
      ...prev,
      {
        id: Math.floor(Math.random() * 100),
        bookname: bookname,
        author: author,
        review: review,
      },
    ]);
    onCancel();
  }

  //const preview_data = DUMMY_BOOKS.slice(-3);

  return (
    <>
      {addModal && (
        <NewPostForm onClickCancel={onCancel} onSubmit={submitHandler} />
      )}
      <div>
        <ul className="preview-list">
          {enteredValue.map((book) => (
            <li key={book.id} className="list-items">
              <Post item={book} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
