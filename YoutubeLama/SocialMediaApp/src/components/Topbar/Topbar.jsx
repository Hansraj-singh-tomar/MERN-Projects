import './topbar.css'
import {Search, Person, Chat, Notifications} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        
        {/* Top Left Bar */}
        <div className="topbarLeft">
            <NavLink to="/" style={{textDecoration: "none"}} className='logo'><span>Lamasocial</span></NavLink>
        </div>

        {/* Top Center Bar */}
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input className="searchInput" type="text" placeholder='Search for friends, post or video' />
            </div>
        </div>

        {/* Top Right Bar */}
        <div className="topbarRight">
          
          <div className='topbarLinks'>
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          
          <div className='topbarIcons'>
            <div className="topbarIconItem">
              <Person />
              <span className='topbarIconBadge'>1</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className='topbarIconBadge'>2</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className='topbarIconBadge'>1</span>
            </div>
          </div>

          <img className='topbarImg' src="/assets/person/img1.jpg" alt="profile pic" />
        
        </div>
    </div>
  )
}

export default Topbar