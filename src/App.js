import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Predevelopment } from './Predevelopment';
import { Hero } from './Hero';
import Experience from './Experience';
import Services from './Services';
import { Travel } from './Travel';
import Banner from './Banner';
import Globe from './Globe';
import { RevealBento } from './RevealBento';
import Lottie from 'lottie-react';
import Testimonal from './Testimonal';

/* import { TimelineDemo } from './TimelineDemo'; */
/* import { TimelineDemo } from './TimelineDemo'; */
/* import { TimelineDemo } from './TimelineDemo'; */
import {StickyCards} from './components/features/grid/StickyCards';
import { CornerGrid } from './components/utils/CornerGrid';
import scene from './Scene-23.gif';
import Philosophy from './Philosophy';
import PathMorphing from './PathMorphing';
function App() {
  return (
    <Router>


      <Routes>
        <Route path="/" element={
          <div className='bg-black'>
            <div className='-z-50 overflow-clip'>
 
              <Hero></Hero>
            </div>
            
            <StickyCards></StickyCards>
           <Banner></Banner>
            {/* <Services></Services>
            <Experience></Experience>
            <Travel></Travel> */}
            {/* <Travel dots={[
  { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 34.0522, lng: -118.2437 } },
]}></Travel> */}
            <Testimonal></Testimonal>
            {/* <PathMorphing></PathMorphing> */}
            <Philosophy></Philosophy>
            <RevealBento></RevealBento>
          
          </div>
        }></Route>

      </Routes>

    </Router>

  );
}

export default App;
