function BlogCard({ blog, onDelete }) {
  return (
    <div className="card">
      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <h2>{blog.title}</h2>

      <p>{blog.description}</p>

      <button>Read More</button>

      <button
        onClick={() => onDelete(blog._id)}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default BlogCard;