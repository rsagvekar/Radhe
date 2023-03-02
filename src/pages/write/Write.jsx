import "./write.css";
export default function Write() {
  return (
    <div className="write">
      <img 
      className="writeImg"
      src="https://www.shutterstock.com/shutterstock/photos/1761244532/display_1500/stock-photo-hindu-god-radha-krishna-iskcon-temple-with-nice-dressup-and-rose-petals-background-wallpaper-design-1761244532.jpg" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
