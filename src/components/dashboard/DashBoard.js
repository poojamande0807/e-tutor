import React, { useEffect, useState } from "react";
import "./DashBoard.css";

const DashBoard = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add class to make content visible after mounting
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero-section">
      <div className={`hero-content ${visible ? "visible" : ""}`}>
        <h1>Learn with expert anytime anywhere</h1>
        <p>
          Our mission is to help people find the best courses online and build
          their skills anytime, anywhere.
        </p>
        <button className="cta-btn">Get Started</button>
      </div>
      <div className="hero-image">
        <img
          src="https://s3-alpha-sig.figma.com/img/f32a/4429/3732c213d9f03afa2d1ecc5c375b95f6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hgyP~b5xxoirKfiwihgrMx~~8GoKCrC-U1uM2C3HQForC46bA7RZoeuwdEmNs2QBRKRY4rb-nchBN6YYx-ib3D5E6zMQzLipXFlMP7bePXjZHYLGtgiO0YuJy2sh8JkLzEdDnPvSWORLrAMcB7GVuZ4UpebIZdfl7Kv5Na6WW7dB31wuBX8TrV87cIwzPK99lTorX8TaLSWkK1qy4cQXd~WkZDDL9W6AqKzXg8ncyhix8btWd2jOTCY01i96E6HeGeCB-gR-EqTlc5QSKBjv2beM3LE7lj0AFUFOMZw64AY0Y-2X9SWFOky3PENAJ7BY-2ru4qTMhzVeWbmnOXbJbw__"
          alt="Learning Experience"
        />
      </div>
    </div>
  );
};

export default DashBoard;
