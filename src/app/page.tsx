import { Earth, ServerCog, TabletSmartphone } from "lucide-react";
import React from "react";

const App = () => {
  return (
    <>
      <section className="services-section py-16 bg-white">
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
                    such as PHP and Python, we build scalable and
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
      <section className="project-section py-16 bg-black">
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
    </>
  );
};

export default App;
