import "./intro.css";
import { Typewriter } from 'react-simple-typewriter'

export default function Intro() {

  return (
    <div className="introWrap">
      <Typewriter
        words={["Hello World, I'm Natan :)"]}
        cursor
        cursorStyle='▌'
        typeSpeed={70}
        deleteSpeed={0}
      />
    </div>
  );
}
