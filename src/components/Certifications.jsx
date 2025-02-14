import React, { useState, useRef, useEffect } from "react";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";

const CertificationCard = ({ image, overlayText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [overlaySize, setOverlaySize] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      const cardHeight = cardRef.current.offsetHeight;
      setOverlaySize({ width: cardWidth, height: cardHeight }); // Set height and width to match card
    }
  }, []);

  const cardContainerStyle = {
    position: "relative",
    width: "400px",
    height: "400px",
    margin: "20px",
    overflow: "hidden",
    borderRadius: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.3s ease",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0, // Start from the right
    width: "60%", // Initial width
    height: "100%", // Initial height
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    opacity: isHovered ? 1 : 0.8, // Initially slightly visible
    transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
    transformOrigin: "top right", // Change transform origin to top-right
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)", // Creates parallelogram with cut on left side
  };

  const hoveredOverlayStyle = {
    width: isHovered ? "100%" : overlaySize.width,
    height: isHovered ? "100%" : overlaySize.height,
    borderRadius: "20px",
    textAlign: "center",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  };

  const textStyle = {
    textAlign: "center",
    padding: "10px",
    margin: "5px",
  };

  return (
    <div
      style={cardContainerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={cardRef}
    >
      <img src={image} alt="Card" style={imageStyle} />
      <div
        style={{ ...overlayStyle, ...(isHovered ? hoveredOverlayStyle : {}) }}
      >
        {/* for title */}
        <div
          style={textStyle}
          dangerouslySetInnerHTML={{ __html: overlayText.title }}
          className="bg-blue-950 text-2xl font-bold text-align-center ml-9 text-white underline rounded-3xl"
        />
        {/* for content */}
        <div
          style={textStyle}
          dangerouslySetInnerHTML={{ __html: overlayText.content }}
          className="bg-slate-500 text-align-end font-bold text-black text-sm rounded-md"
        />
        <div className="flex justify-center items-end w-full h-full mb-3">
          <div
            style={textStyle}
            className="text  font-bold text-align-end bg-teal-500 rounded-lg cursor-pointer"
          >
            <a
              href={overlayText.link} // URL from overlayText
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

function Certifications() {
  return (
    <div>
      <motion.div className="flex flex-col items-center">
        <h2 className={styles.sectionHeadText}>Certifications</h2>

        <p className={styles.sectionSubText}>
          I have completed the following certifications
        </p>
      </motion.div>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} index={index} {...certification} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Certifications, "certifications");
