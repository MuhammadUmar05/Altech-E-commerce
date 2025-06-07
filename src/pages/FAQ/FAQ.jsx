import { Accordion, AccordionItem } from "@heroui/react";
import NewsSection from "../../components/NewsSection/NewsSection";

function FAQ() {
  const itemClasses = {
    base: "",
    title: "text-white md:text-xl text-sm px-4 py-2",
    trigger:
      "px-2 py-4 box-shadow data-[hover=true]:bg-white/10 data-[focus=true]:bg-white/10 rounded-lg h-14 flex items-center transition-colors",
    indicator: "text-xl",
    content: "px-4 text-white/70",
  };
  return (
    <section className="flex flex-col justify-center items-center gap-6 md:px-20 px-4 py-20 text-white md:max-w-6xl m-auto">
      <p
        className="bg-[#f9f9f91a] px-3 py-2 text-white rounded-3xl box-shadow text-lg font-semibold"
        data-aos="fade-up"
      >
        About
      </p>
      <p
        data-aos="fade-up"
        className="text-transparent bg-gradient-to-r from-neutral-100 to-neutral-100/40 bg-clip-text md:text-5xl text-2xl font-bold text-center"
      >
        Get Answers to Questions
        <br /> You Might Have
      </p>
      <Accordion
        itemClasses={itemClasses}
        data-aos="fade-up"
        variant="bordered"
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              overflowY: "unset",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              overflowY: "hidden",
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
      >
        <AccordionItem
          className="py-2"
          key="1"
          aria-label="Accordion 1"
          title="My Students Already Know More Than Me:"
        >
          Students who are using AI and cryptocurrencies, and you want to keep
          up with their conversations.
        </AccordionItem>
        <AccordionItem
          className="py-2"
          key="2"
          aria-label="Accordion 2"
          title="My Friends Have Cryptocurrencies, But I Don't Get Why"
        >
          Friends who talk about cryptocurrencies and Web3, and you want to
          understand the terminology.
        </AccordionItem>
        <AccordionItem
          className="py-2"
          key="3"
          aria-label="Accordion 3"
          title="I Want to Use AI in My Work, But I Don't Know How"
        >
          You want to embrace the future of technology without fear.
        </AccordionItem>
        <AccordionItem
          className="py-2"
          key="4"
          aria-label="Accordion 4"
          title="Ways to Be More Efficient and Creative? There Are Too Many Tools"
        >
          You're ready to navigate tomorrow's innovations confidently.
        </AccordionItem>
      </Accordion>
      <NewsSection />
    </section>
  );
}

export default FAQ;
