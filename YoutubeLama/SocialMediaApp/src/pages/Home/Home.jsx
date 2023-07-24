import Topbar from '../../components/Topbar/Topbar';
import Feed from '../../components/feed/Feed';
import RIghtBar from '../../components/rightbar/RIghtBar';
import Sidebar from '../../components/sidebar/Sidebar';
import './home.css';
const Home = () => {
  return (
    <>
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <RIghtBar/>
      </div>
    </>
  )
}

export default Home