import { Link as ScrollLink } from "react-scroll/modules";
import bgImage from "../assets/bgpattern3.png";
import aboutImage from "../assets/images/about-image2.png";

function About() {
  return (
    <section id="about" style={{ position: "relative" }}>
      <div
        className="relative flex flex-col gap-14 items-center justify-center animate-fadeIn animation-delay-2 py-16 
							sm:py-30 md:py-24 md:flex-row md:text-left"
      >
        <div
          style={{ backgroundImage: `url(${bgImage})` }}
          className="bg-pattern bg-about"
        ></div>
        <div className="md:w-3/5">
          <h2 className="text-3xl text-center md:text-left font-bold my-6 md:mt-0 md:text-4xl relative">
            About
            <hr
              className="w-10 border-t-4 rounded border-teal-700 absolute left-[50%] -translate-x-12
									md:mt-1 md:w-12 md:left-0 md:-translate-x-1"
            />
          </h2>
          <p className="text-[17px] md:text-[18px] text-gray-200 leading-relaxed font-normal">
  I'm a <span className="font-semibold text-white">B.Tech CSE student</span> at{" "}
  <span className="font-semibold text-white">IIIT Dharwad</span> passionate about
  building modern web applications and writing efficient code. I love exploring{" "}
  <span className="font-semibold text-white">DSA, full-stack development,</span> 
  and creating smooth user experiences using{" "}
  <span className="font-semibold text-white">React, TypeScript,</span> and{" "}
  <span className="font-semibold text-white">Tailwind.</span>
</p>

<br />

<p className="text-[17px] md:text-[18px] text-gray-200 leading-relaxed font-normal">
  I’m driven by curiosity and a constant urge to{" "}
  <span className="font-semibold text-white">learn, experiment,</span> and push
  my boundaries. Currently focused on sharpening my dev skills and contributing
  to real-world projects that make an impact.
</p>

<br />

<p className="text-[17px] md:text-[18px] text-gray-200 leading-relaxed font-normal">
  <span className="font-semibold text-white">Open to new opportunities</span>, so
  feel free to{" "}
  <ScrollLink
    smooth={true}
    offset={-100}
    spy={true}
    to="contact"
    className="font-semibold text-teal-400 cursor-pointer hover:underline"
  >
    get in touch!
  </ScrollLink>
</p>

        </div>
        <div className="md:w-1/3">
          <img src={aboutImage} alt="Profile image" width={420} />
        </div>
      </div>
    </section>
  );
}

export default About;
