export default function Post({ item }) {
  return (
    <>
      <div className="preview-posts">
        <article className="preview-article">
          <div className="preview-description">
            <h2>{item.bookname}</h2>
            <p>{item.author}</p>
            <p>{item.review}</p>
          </div>
        </article>
      </div>
    </>
  );
}
