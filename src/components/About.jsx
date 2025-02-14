import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

// here ServiceCard has index: used to control animation timing
// title: used to display the title of the service
// icon: used to display the icon of the service

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Box
      sx={{
        perspective: "1000px",
        transition: "transform 0.4s",
        "& > div, & > div > div": {
          transition: "inherit",
        },
        "&:hover": {
          "& > div": {
            transform: "rotateY(30deg)",
            "& > div:nth-of-type(2)": {
              transform: "scaleY(0.9) translate3d(20px, 30px, 40px)",
            },
            "& > div:nth-of-type(3)": {
              transform: "translate3d(45px, 50px, 40px)",
            },
          },
        },
      }}
    >
      <Card
        variant="outlined"
        sx={{
          minHeight: "280px",
          width: 250,
          backgroundColor: "#fffff",
          borderColor: "#00000",
        }}
      >
        <Typography level="h2" textColor="#000" sx={{ fontSize: "lg" }}>
          {title}
        </Typography>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
            border: "1px solid",
            borderColor: "#777",
          }}
        >
          {/* <Typography level="h2" textColor="#fff" sx={{ fontSize: "lg" }}>
            <img src={icon} />
          </Typography> */}
        </CardCover>
        <CardContent
          sx={{
            display: "flex", // Ensures content is properly aligned
            flexDirection: "column", // Keeps items stacked
            alignItems: "center", // Center align content
            justifyContent: "center", // Center it properly
            background:
              "linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3))",
            border: "1px solid",
            borderColor: "#000",
            height: "200px", // Ensure enough space for the image
            width: "100%", // Take full width of parent
          }}
        >
          <Typography level="h2" textColor="#fff" sx={{ fontSize: "lg", m: 2 }}>
            <img
              src={icon}
              alt="Icon"
              style={{
                width: "240px", // Increase width
                height: "140px", // Increase height
                objectFit: "cover", // Ensure the image fits without cropping
                display: "block", // Remove unwanted spaces
              }}
            />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with expertise in TypeScript,
        JavaScript, and modern frameworks like React,Next.js Node.js, and
        Three.js. Passionate about building efficient, scalable, and
        user-friendly solutions, I thrive on solving real-world challenges
        through code. With a fast-learning mindset and a collaborative approach,
        I work closely with clients to turn ideas into reality. Let’s build
        something amazing together!
      </motion.p>
      {/*now we are going to write the code for cards in the about section */}

      <div className="mt-20 flex flex-wrap gap-10">
        {/* here we used map to iterate over an array of service card object imported from ../constants to render one ServiceCard
            each card has (service,index)
            index-> used to control animation timing
            service-> contains title and icon of the service
        */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
