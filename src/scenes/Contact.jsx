import React from 'react';
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

  return (
    <section id='contact' className='py-48 contact'>
    {/* HEADINGS */}
      <motion.div
        className="flex justify-center w-full mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div>
          <p className="text-4xl font-semibold font-playfair">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex justify-center my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="gap-16 mt-5 md:flex md:justify-between md:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex justify-center basis-1/2"
        >
          <img src="../assets/contact-image.jpeg" alt="contact" />
        </motion.div>

         <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 basis-1/2 md:mt-0"
        >
            <form action="https://formsubmit.co/64a0aa3b1122d9b9d1f9b3ad258fb9d9" method='post' target='_blank' onSubmit={onSubmit}>
                <input
                    className="w-full p-3 font-semibold bg-blue placeholder-opaque-black"
                    type="text"
                    placeholder="NAME"
                    {...register("name", {
                        required: true,
                        maxLength: 100,
                    })}
                />
                {errors.name && (
                <p className="mt-1 text-red">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is <= 100 characters."}
                </p>
                )}

                <input
                    className="w-full p-3 mt-5 font-semibold bg-blue placeholder-opaque-black"
                    type="text"
                    placeholder="EMAIL"
                    {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                />
                {errors.email && (
                <p className="mt-1 text-red">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                </p>
                )}

                <textarea
                    className="w-full p-3 mt-5 font-semibold bg-blue placeholder-opaque-black"
                    name="message"
                    placeholder="MESSAGE"
                    rows="4"
                    cols="50"
                    {...register("message", {
                        required: true,
                        maxLength: 2000,
                    })}
                />
                {errors.message && (
                <p className="mt-1 text-red">
                    {errors.message.type === "required" &&
                    "This field is required."}
                    {errors.message.type === "maxLength" &&
                    "Max length is 2000 characters."}
                </p>
                )}

            <button
              className="p-5 mt-5 font-semibold transition duration-500 bg-yellow text-deep-blue hover:bg-red hover:text-white"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
            
            </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact;