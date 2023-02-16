import './App.css'
import Header from './components/Header.jsx'
import BodyVideo from "./components/BodyVideo.jsx"
import Articles from "./components/Articles.jsx"
import video from './assets/Video-Website-fast.mp4'

function App() {

  return (
    <div className="App">
      <video className='background-video' autoPlay loop muted>
        <source src={video} type='video/mp4' />
      </video>
      <header>
        <Header />
      </header>
      <div>
        <BodyVideo />
        <Articles />
      </div>
    </div>
  )
}

export default App