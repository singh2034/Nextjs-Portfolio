"use client";

import Typewriter from "typewriter-effect";

const HeroMain = () => {
  return (
    <>
      <section className="hero-container p-10">
        <div className="hero-content-container">
          {/* left section */}
          <div className="max-md:order-2 flex flex-col gap-5 z-40">
            <div>
              <h1 className="text-4xl mb-7">Hi, I am Aayush and I am a,</h1>
              <span className="font-semibold text-4xl text-red-600">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Web Developer !",
                      "MERN Stack Developer !",
                      "Front-End Developer !",
                      "Back-End Developer !",
                      "React-Native Developer !",
                      "And Figma UI/UX Designer !",
                    ],
                    autoStart: true,
                    delay: 50,
                    loop: true,
                  }}
                />
              </span>
              <h1 className="text-3xl font-semibold mb-3 mt-7">From New-Delhi, India.</h1>
            </div>
            {/* right section */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroMain;
