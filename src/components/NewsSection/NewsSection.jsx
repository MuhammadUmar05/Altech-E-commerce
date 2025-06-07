import React, { useRef } from "react";
import emailJs from "@emailjs/browser";
import { addToast } from "@heroui/react";
function NewsSection() {
  const form = useRef();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await emailJs.sendForm(
        "service_psna4tb",
        "template_dn40p16",
        form.current,
        "BqtZW0dnQ6ok1vaWd"
      );
      form.current.reset();
      addToast({
        timeout: 2000,
        shouldShowTimeoutProgress: true,
        variant: "flat",
        title: "Email has been sent successfully",
        color: "success",
        classNames: {
          base: "dark text-foreground background",
        },
      });
    } catch (error) {
      addToast({
        timeout: 2000,
        shouldShowTimeoutProgress: true,
        variant: "flat",
        title: "Something went wrong, Try again!",
        color: "warning",
        classNames: {
          base: "dark text-foreground background",
        },
      });
    }
  };
  return (
    <article className="flex flex-col justify-center items-center gap-4 py-10 md:px-20 px-4 md:max-w-3xl m-auto">
      <p
        className="bg-[#f9f9f91a] px-3 py-2 text-white rounded-3xl box-shadow"
        data-aos="fade-up"
      >
        Newsletter
      </p>
      <p
        data-aos="fade-up"
        className="text-transparent bg-gradient-to-r from-neutral-100 to-neutral-100/40 bg-clip-text md:text-5xl text-3xl font-bold text-center"
      >
        Stay Updated on Latest Product Releases
      </p>
      <p
        className="text-white/70 md:text-2xl text-lg text-center"
        data-aos="fade-up"
      >
        Never Miss a beat and stay update with new product arrivals and
        promotions
      </p>
      <form
        className="flex flex-col items-stretch gap-2 py-2  md:w-2/3 w-full"
        data-aos="fade-up"
        ref={form}
        onSubmit={handleSubmit}
      >
        <input
          name="name"
          required
          type="text"
          placeholder="Name"
          className="flex-1 bg-[#f9f9f914] rounded-3xl px-4 py-3 outline-none border-none text-white/80"
        />
        <input
          name="email"
          required
          type="email"
          placeholder="Email Address"
          className="flex-1 bg-[#f9f9f914] rounded-3xl px-4 py-3 outline-none border-none text-white/80"
        />
        <button className="bg-[#f9f9f93d] rounded-3xl py-3 text-white/70 px-4">
          Subscribe
        </button>
      </form>
    </article>
  );
}

export default NewsSection;
