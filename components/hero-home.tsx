import AnimatedButton from "./ui/animatedButton";
import ImageCarousel from "./imageCarousel";
import Image from "next/image";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-12">
          <div className="flex flex-col pb-12 text-center md:pb-16 items-center gap-0">
            <Image
              src={"/images/Zengravitas_Graffiti.png"}
              alt="Zengravitas"
              height={0}
              width={800}
            />
            <h1
              className="mb-6 mt-10 border-y-2 text-5xl font-bold md:text-6xl py-5"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              “Your journey to success begins here"
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-center"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Enhance the cognitive and problem-solving skills of employees
                through a comprehensive aptitude training program, improving
                their overall performance and efficiency.
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
          <div className="flex w-full h-full">
            {/* <video width="700" height="360" autoPlay loop muted poster="">
              <source src="/videos/videoplayback.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
