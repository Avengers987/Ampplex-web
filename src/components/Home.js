import React from "react";
import "./Home.css";
import Lottie from "react-lottie";

export default function Home() {
  return (
    <>
      <div
        className="container"
        style={{
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        <div
          className="GlassMorphism"
          style={{
            width: window.innerWidth * 0.8,
            height: window.innerHeight * 0.8,
          }}
        >
          <h1
            style={{
              color: "white",
              fontSize: "35px",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          >
            Ampplex is an online social media platform specially designed for
            students
          </h1>
          <div
            style={{
              width: 700,
              height: 700,
            }}
            className="Animation"
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: require("../static/lottie/cs.json"),
              }}
            />
          </div>
        </div>
        <div className="circle1">
          <img
            src={require("../static/Images/ball.png")}
            width={350}
            height={350}
            draggable="false"
            alt="ball"
          />
        </div>
        <div className="circle2" />
        <div className="circle3">
          <img
            src={require("../static/Images/ball.png")}
            width={350}
            height={350}
            draggable="false"
            alt="ball"
          />
        </div>
      </div>
    </>
  );
}
