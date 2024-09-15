import React from "react";

const App = () => {
  return (
    <>
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
