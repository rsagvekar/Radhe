import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://w0.peakpx.com/wallpaper/316/973/HD-wallpaper-radhe-radhe-krishna-radha.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        tempore eaque possimus quidem magni est aliquam amet necessitatibus
        maxime explicabo ducimus consectetur eius cumque beatae consequatur
        vitae corporis maiores nostrum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        tempore eaque possimus quidem magni est aliquam amet necessitatibus
        maxime explicabo ducimus consectetur eius cumque beatae consequatur
        vitae corporis maiores nostrum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        tempore eaque possimus quidem magni est aliquam amet necessitatibus
        maxime explicabo ducimus consectetur eius cumque beatae consequatur
        vitae corporis maiores nostrum!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        tempore eaque possimus quidem magni est aliquam amet necessitatibus
        maxime explicabo ducimus consectetur eius cumque beatae consequatur
        vitae corporis maiores nostrum!
      </p>
    </div>
  );
}
