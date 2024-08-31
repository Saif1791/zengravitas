"use client";

import AnimatedButton from "./ui/animatedButton";
import axios from "axios";

export default function Cta() {
  const handleDownload = async () => {
    try {
      const response = await axios.get("/api/downloadQuestions", {
        responseType: "blob",
      });

      const contentDisposition = response.headers["content-disposition"];
      const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
      const fileName = fileNameMatch
        ? fileNameMatch[1]
        : "ZenGravitasSampleAptitudeQuestions.pdf";
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl">
              KickStart your preparataion with Zengravitas
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div
                className="btn group mb-4 w-full text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                onClick={handleDownload}
              >
                <AnimatedButton
                  CTA="Download Sample Aptitude Questions"
                  link=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
