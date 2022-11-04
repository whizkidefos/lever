import React from 'react';
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
    const testimonialStyles = `mx-auto relative max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:w-56 before:h-56 before:rounded-full`;
  return (
    <section id='testimonials' className='pt-32 pb-16'>
    {/* HEADING */}
      <motion.div
        className="mx-auto text-center md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-5 text-4xl font-semibold font-playfair text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      <div className="gap-8 md:flex md:justify-between">
        <motion.div
          className= {`bg-blue ${testimonialStyles} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-6xl font-playfair">“</p>
          <p className="text-xl text-center">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className= {`bg-red ${testimonialStyles} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-6xl font-playfair">“</p>
          <p className="text-xl text-center">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className= {`bg-yellow ${testimonialStyles} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-6xl font-playfair">“</p>
          <p className="text-xl text-center">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials;