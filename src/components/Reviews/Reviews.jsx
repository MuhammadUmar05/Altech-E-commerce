import { reviewsData } from "./reviewsData";
import Ratings from "./Ratings";

function Reviews() {
  return (
    <section className="flex flex-col py-10 md:px-20 px-4">
      <p
        data-aos="fade-up"
        className="text-transparent bg-gradient-to-r from-neutral-100 to-neutral-100/40 bg-clip-text text-4xl font-bold text-center"
      >
        Customer Reviews
      </p>
      <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-white py-6">
        {reviewsData.map(({ name, avatar, headline, comment }, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-4 p-6 md:p-8 rounded-3xl bg-[#f9f9f90f] box-shadow"
              data-aos="fade-up"
            >
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-3">
                  <img
                    className="aspect-square w-10 rounded-full"
                    src={avatar}
                  />
                  <p className="md:text-lg">{name}</p>
                </div>
                <Ratings />
              </div>
              <div className="flex flex-col gap-4 ">
                <p className="text-2xl text-white/80 font-medium">{headline}</p>
                <p className="text-white/70 font-medium">{comment}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;
