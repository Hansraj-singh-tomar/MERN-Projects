import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RIghtbar from "../../components/rightbar/RIghtbar";

export default function Profile() {

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/post3.jpg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}post/post7.jpg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Danver Singh Tomar</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RIghtbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}