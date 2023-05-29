import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>

      <div className="header__left">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder='Search' />
          </div>
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={ChatIcon} title='Messaging'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOption avatar='https://media.licdn.com/dms/image/D4E03AQG2XCJBtszUhg/profile-displayphoto-shrink_200_200/0/1684266462772?e=1690416000&v=beta&t=Wq161tsSumimY-jmCCiPnXQfQ8sAxmZ4i2-nini2hB4'
            title='me'/>
      </div>

    </div>
  )
}

export default Header
