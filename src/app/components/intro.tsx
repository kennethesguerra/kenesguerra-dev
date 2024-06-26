import { ReactTyped } from "react-typed";
import { Email } from "@mui/icons-material";

import '../styles/intro.css';

export default function Intro() {
  return (
    <div id="intro">
      <div className="intro-title-container">
        <ReactTyped 
          className="intro-title"
          strings={[
            "<span>Hello, you! It's me, <span class='intro-name'>Ken</span></span>"
          ]}
          typeSpeed={40}
        />
        <div className="intro-desc">
          A Manila-based Software Engineer who primarily works on the web. 
          I specialize on building web applications using React and Node.js. I'm currently 
          working at <span className="asurion"><a href="https://asurion.com" target="_blank">Asurion</a></span>.
        </div>
        <div className="mt-10">
          <a href="mailto:esguerrakenneth@gmail.com" className="btn-mailto">
            <span>
              <Email style={{ fontSize: 30 }}></Email>
            </span>
            &nbsp;&nbsp; Let's Chat!</a>
        </div>
      </div>
    </div>
  )
}
