import AnimatedButton from "./ui/animatedButton";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              “Your journey to success begins
              <br className="max-lg:hidden" />
              with ZenGravitas."
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Enhance the cognitive and problem-solving skills of employees
                through a comprehensive aptitude training program, thereby
                improving their overall performance and efficiency in the
                workplace.
              </p>
              <div className="relative">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <AnimatedButton CTA="Get Started" link="/about" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <video width="700" height="360" autoPlay loop muted poster="">
              <source src="/videos/videoplayback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
