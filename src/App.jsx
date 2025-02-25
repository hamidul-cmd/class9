import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

function App() {
  // normal gsap

  // useGSAP(() => {
  //   gsap.to(".box", {
  //     x: 1000,
  //     duration: 2,
  //     delay: 1,
  //   });
  // });

  // gspa with useref

  // const gsapref = useRef();
  // useGSAP(() => {
  //   gsap.from(gsapref.current, {
  //     y: 300,
  //     rotate: 360,
  //     opacity:0,
  //     duration: 2,
  //     delay: 1,
  //   });
  // });

  // gspa with scop
  // const container = useRef()
  // useGSAP(() => {
  //   gsap.to(".box", {
  //     rotate: 360,
  //     duration: 2,
  //     delay: 1,
  //   });
  // },{scope:container});

  const [surcal, setsurcal] = useState(0)
  const rendom = gsap.utils.random(-500,500,100)
  useGSAP(()=> {
    gsap.to(".surcal", {
      x:surcal,
      duration:0.5,
    })
  },[surcal])

  return (
    <div>
      <main>
        <button onClick={()=>{
          setsurcal(rendom)
          console.log(rendom)
        }}>click</button>
    <div className="surcal"></div>
      </main>
    </div>
  );
}

export default App;
