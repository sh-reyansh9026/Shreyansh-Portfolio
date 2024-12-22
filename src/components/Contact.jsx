import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// public key - 4NM-9JJSCN7Sw8va_
// template id -- template_0j42t9d
// service id --service_3vco05f

const Contact = () => {
  const formRef = useRef(); // useRef is used to get the mutable reference that persists across renders
  //ref.current holds the mutable value.

  const [form, setForm] = useState({
    // setForm -> A function used to update the form state.
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value }); // ...form -> creates a shallow copy of form object and updates the value of the key passed in the argument
    // if ... is not used in ...form then the form object will be replaced by the new object loosing its previous values
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // It is used to stop the browser's default behavior for a particular event from occurring.
    setLoading(true);
    // used for handling the form submission and sending the email
    emailjs
      .send(
        // send function is used to send the email
        "service_3vco05f",
        "template_0j42t9d",
        {
          from_name: form.name,
          to_name: "Sh.reyansh",
          from_email: form.email,
          to_email: "sh.reyansh9026@gmail.com",
          message: form.message,
        },
        "4NM-9JJSCN7Sw8va_"
      )
      .then(
        // executes when email is sent successfully
        // after sending the email the form is reset and a alert is shown to the user
        // loading is set to false after submitting
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse
    flex gap-10 overflow-hidden"
    >
      <motion.div
        // here variants slideIn function is used to animate the component so that it comes from left
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/*contact form*/}
        <form
          ref={formRef}
          onSubmit={handleSubmit} // handleSubmit function is called when form is submitted it is defined above
          className="mt-12 flex flex-col gap-8"
        >
          {/*name input*/}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange} // handleChange function is called when input value is changed it is defined above
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/*email input*/}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/*message input*/}
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary
              text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          {/*submit button*/}
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 
             outline-none w-fit text-white font-bold shadow-md
             shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/*earth canvas*/}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // varianst slideIn function is used to animate the component so that it comes from right
        className="xl:flex-1 xl:h-auto md:h-[550px]
        h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
