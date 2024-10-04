import { Earth, ServerCog, TabletSmartphone } from "lucide-react";
import React from "react";

const App = () => {
  return (
    <>
      <section id="home" className="home-section py-36 bg-black">
        <div className="data-container text-white mx-auto max-w-[80vw] flex flex-col justify-center">
          <h1 className="font-bebas text-9xl mobile:text-7xl animate-slide color-sweep">
            Turning your visionary ideas into powerful realities,
          </h1>
          <p className="font-bebas text-5xl mobile:text-4xl animate-slide color-sweep">
            <span className="text-[#41e1db]">One</span> step at a time.
          </p>
        </div>
      </section>
      <section id="services" className="services-section py-16 bg-white">
        <div className="data-container mx-auto max-w-[80vw] tablet:max-w-[95vw] flex flex-col justify-center gap-8">
          <h3 className="head text-[#41e1db] font-semibold text-2xl">
            What We Do?
          </h3>
          <div className="serviceIntro flex flex-col gap-6">
            <span className="text-black text-6xl font-oswald">
              Handling all your tech needs, so you don't have to.
            </span>
            <span className="text-black text-xl">
              Elevate your digital presence with innovative websites and apps
              that merge business goals with user engagement. From concept to
              execution, we craft solutions that set new benchmarks in design
              and functionality, delivering seamless experiences across all
              devices. With a strong focus on user experience and brand
              enhancement, we blend design, content, and technology to create
              impactful, performance-driven results.
            </span>
          </div>
          <div className="serviceContainer flex justify-between gap-8">
            <div className="flip-container hover-trigger card1">
              <div className="flipper">
                <div className="front bg-[#41e1db]/30 text-black flex flex-col items-center justify-center rounded-lg p-4">
                  <Earth width={42} height={42} />
                  <h3 className="mt-4 text-2xl text-center">Web Development</h3>
                </div>
                <div className="back bg-[#41e1db]/30 text-black flex flex-col items-center justify-center rounded-lg p-4">
                  <p>
                    We offer comprehensive web development services that span
                    from frontend to backend. With expertise in frameworks like
                    React, Angular, and Next.js, as well as backend technologies
                    such as NodeJS,PHP and Python, we build scalable and
                    high-performing solutions tailored to your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-container hover-trigger card2">
              <div className="flipper">
                <div className="front bg-[#41e1db]/30 text-black flex flex-col items-center justify-center rounded-lg p-4">
                  <TabletSmartphone width={42} height={42} />
                  <h3 className="mt-4 text-2xl text-center">
                    Mobile App Development
                  </h3>
                </div>
                <div className="back bg-[#41e1db]/30 text-black flex flex-col items-center justify-center rounded-lg p-4">
                  <p>
                    We specialize in mobile development using JavaScript-based
                    frameworks, primarily React Native. Our focus is on
                    delivering high-quality, cross-platform mobile applications
                    that provide a seamless user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="flip-container hover-trigger card3">
              <div className="flipper">
                <div className="front bg-[#41e1db]/30 text-black flex flex-col items-center justify-center rounded-lg p-4">
                  <ServerCog width={42} height={42} />
                  <h3 className="mt-4 text-2xl">DevOps</h3>
                </div>
                <div className="back bg-[#41e1db]/30 text-black flex flex-col items-center justify-center rounded-lg p-4">
                  <p>
                    We offer robust DevOps solutions that streamline your
                    development and deployment processes, ensuring faster
                    delivery and enhanced collaboration through automation and
                    optimized workflows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="project-section py-16 bg-black">
        <div className="data-container mx-auto max-w-[90vw] flex flex-col justify-center">
          <div className="pSection1 flex justify-center pb-4 gap-4">
            <div className="projectL">
              <div className="content_box">
                {/* image resolution should be same everywhere to create a proper
                grid */}
                {/* 380x596 */}
                <img src="/pic-1.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
            </div>
            <div className="projectM flex flex-col justify-between">
              <div className="content_box">
                {/* 380x283 */}
                <img src="/pic-2.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
              <div className="content_box">
                {/* 380x283 */}
                <img src="/pic-3.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
            </div>
            <div className="projectR">
              <div className="content_box">
                {/* 380x596 */}
                <img src="/pic-4.jpg" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
            </div>
          </div>
          <div className="pSection2 justify-center flex pb-8 gap-4">
            <div className="projectL flex flex-col gap-5">
              <div className="content_box">
                {/* 347x544 */}
                <img src="/pic-12.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
              <div className="content_box">
                {/* 347x544 */}
                <img src="/pic-7.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
            </div>
            <div className="projectM flex flex-col justify-between">
              <div className="content_box">
                {/* 347x259 */}
                <img src="/pic-11.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
              <div className="content_box">
                {/* 347x544 */}
                <img src="/pic-9.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
              <div className="content_box">
                {/* 347x268 */}
                <img src="/pic-6.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
            </div>
            <div className="projectR flex flex-col gap-5">
              <div className="content_box">
                {/* 347x259 */}
                <img src="/pic-10.png" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
              <div className="content_box">
                {/* 347x259 */}
                <img src="/pic-8.webp" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
              <div className="content_box">
                {/* 347x543 */}
                <img src="/pic-5.jpg" alt="" />
                <div className="project_desc">
                  <h3>Project Title</h3>
                  <div className="desc">Project Description</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="aboutus-section py-36 bg-white">
        <div className="data-container mx-auto max-w-[80vw] tablet:max-w-[95vw] flex flex-col justify-center gap-8">
          <h3 className="head text-[#41e1db] font-semibold text-2xl">
            Who We Are?
          </h3>
          <div className="serviceIntro flex flex-col gap-6">
            <span className="text-black text-6xl font-oswald animate-slide">
              Innovators at heart, technologists by trade – crafting digital
              experiences that inspire.
            </span>
            <span className="text-black text-xl">
              We are a team driven by an unwavering passion for technology and
              innovation, committed to crafting solutions that empower
              businesses to reach new heights. Our journey began with a singular
              goal: to break down complex challenges and deliver technology that
              not only simplifies but transforms the way our clients operate. We
              believe in creating seamless, intuitive, and forward-thinking
              solutions that eliminate inefficiencies and performance
              bottlenecks, allowing businesses to focus on growth and innovation
              without the distractions of technical hiccups. Quality is at the
              heart of everything we do—whether it's designing a robust user
              interface or implementing a flawless backend system, our obsession
              with precision and excellence shines through in every project. We
              approach every task with a mindset to deliver simplicity and ease
              of use, ensuring that our technology not only works but enhances
              the everyday experiences of our users. At our core, we are more
              than just a tech company—we are your partners in growth, dedicated
              to making the complex simple and helping you navigate the future
              with confidence.
            </span>
          </div>
        </div>
        {/* later if we want we can add some images here to showcase team or something like that */}
      </section>
      <section id="contact" className="contact-section py-36 bg-black">
        <div className="data-container mx-auto max-w-[80vw] tablet:max-w-[95vw] flex flex-col justify-center gap-8">
          <h1 className="head text-white font-semibold text-8xl mobile:text-6xl">
            Got a{" "}
            <span className="text-[#41e1db] color-sweep-stay">brilliant</span>{" "}
            idea or a project in mind? Let’s make it happen together
          </h1>
          <h3 className="head text-white font-semibold text-2xl pt-6">
            Contact Us
          </h3>
          <div className="text-white flex flex-col text-4xl mobile:text-2xl pt-6 gap-3">
            <span>
              Email :{" "}
              <a
                href="mailto:inquiries.techeasesolutions@gmail.com"
                className="text-white hover:text-[#41e1db]"
              >
                inquiries.techeasesolutions@gmail.com
              </a>
            </span>
            <span>
              Phone :{" "}
              <a
                href="tel:+919082367697"
                className="text-white hover:text-[#41e1db]"
              >
                +91 9082367697
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
