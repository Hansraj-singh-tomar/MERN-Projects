import PropTypes from 'prop-types';
import './rightbar.css'
import Online from '../Online/Online';
import { Users } from '../../../dummyData';

const RIghtBar = ({profile}) => {

  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  
  const HomeRigthbar = () => {
    return (
      <>
        <div className="birthdayContainer">
            <img className='birthdayImg' src='assets/gift.jpg' alt='birthday img'/>
            <span className='birthdayText'><b>Hansraj singh tomar</b> and <b>3 other friends</b> have birthday today.</span>
        </div>
        
        <img className='rightBarAd' alt="img" src='/assets/birthday.jpg'/>
       
        <h4 className="rightbarTitle">Online Friends</h4>
        
        <ul className='rightbarFriendList'>
          {
            Users.map((u) => (
              <Online key={u.id} user={u}/>
            ))
          }
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className='rightbarTitle'>User Friends</h4>
        
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/img1.jpg`} alt="img" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/img2.jpg`} alt="img" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/img3.jpg`} alt="img" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/img4.jpg`} alt="img" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John carter</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/img5.jpg`} alt="img" className="rightbarFollowingImg" />
            <span className='rightbarFollowingName'>John carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRigthbar />}
      </div>
    </div>
  )
}

RIghtBar.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default RIghtBar