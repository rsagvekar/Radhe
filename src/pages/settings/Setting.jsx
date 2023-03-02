import "./Setting.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Setting() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1761244532/display_1500/stock-photo-hindu-god-radha-krishna-iskcon-temple-with-nice-dressup-and-rose-petals-background-wallpaper-design-1761244532.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: 'none'}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
