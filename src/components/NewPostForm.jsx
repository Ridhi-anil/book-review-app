export default function NewPostForm({ onClickCancel, onSubmit }) {
  return (
    <>
      <div className="backdrop">
        <dialog open className="modal">
          <div>
            <h3>Enter your reviews here</h3>
            <form onSubmit={onSubmit}>
              <div>
                <label>Name Of Book</label>
                <br />
                <input type="text" name="book-name" />
              </div>
              <div>
                <label>Name Of Author</label>
                <br />
                <input type="text" name="author" />
              </div>
              <div>
                <label>Enter Your Review</label>
                <br />
                <textarea name="review" />
              </div>
              <div>
                <button type="button" onClick={onClickCancel}>
                  Cancel
                </button>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
}
