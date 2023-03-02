import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://w0.peakpx.com/wallpaper/316/973/HD-wallpaper-radhe-radhe-krishna-radha.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet .
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Rahul</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          doloremque, iusto ullam provident repudiandae nisi architecto sint
          dolor minus possimus ea natus rerum repellendus magnam veritatis
          deleniti quaerat delectus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          doloremque, iusto ullam provident repudiandae nisi architecto sint
          dolor minus possimus ea natus rerum repellendus magnam veritatis
          deleniti quaerat delectus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          doloremque, iusto ullam provident repudiandae nisi architecto sint
          dolor minus possimus ea natus rerum repellendus magnam veritatis
          deleniti quaerat delectus?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed nesciunt
          doloremque, iusto ullam provident repudiandae nisi architecto sint
          dolor minus possimus ea natus rerum repellendus magnam veritatis
          deleniti quaerat delectus?
        </p>
      </div>
    </div>
  );
}
