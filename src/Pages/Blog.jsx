import BlogBox from "../components/BlogBox/BlogBox";
import Footer from "../components/Footer/Footer";
import Img1 from "../images/blogpage/1.png";

import Recent1 from "../images/blogpage/recent1.jpg";


function Blog() {
  return (
    <><div className="bg-[#000000] border-white ">
      <section>
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Blog
          </h1>
        </div>
        {/* blog */}
        <div className="py-[10rem] container gap-16 page-padding grid grid-cols-[64fr_35fr] md1000:grid-cols-1 md1000:gap-32">
          {/* blog */}
          <div className="flex flex-col gap-28 text-white bouder-white ">
            <BlogBox img={Img1} title=" New Year Offer" />
           {/* <BlogBox
              img={Img2}
              title="Getting Back Into CrossFit After Vacation"
            />
            <BlogBox img={Img3} title="Meet Fitness Ambassador Grace" />
            <BlogBox img={Img4} title="The Best are European Materls Direct" />
            <BlogBox
              img={Img5}
              title="Give your Fitness a Boost with our Gym"
            />
            <BlogBox
              img={Img6}
              title="How to Get Fit Your Kids Moving Throughout The Summer"
            />
            <BlogBox
              img={Img7}
              title="Give your fitness a boost with our new gym challenge"
            /> */}
          </div>

          {/* sidebar */}
          <div>
            {/* form */}
            <form className="flex">
              <input
                className="border-solid border-[1px] text-[#907b7b] text-[16px] font-medium h-[60px] py-[5px] px-[20px] w-full rounded-tl-xl rounded-bl-xl outline-none"
                type="search"
                placeholder="Search..."
              ></input>
              <button type="submit">
                <i className="fa-solid fa-magnifying-glass bg-[#933e3e] text-white text-[23px] h-[60px] w-[60px] rounded-br-xl rounded-tr-xl pt-[18px]"></i>
              </button>
            </form>

            {/* categories */}
            <div className="flex flex-col bg-[#232020] my-[35px] p-[30px]">
              <p className="text-[18px] text-white font-bold mb-5">
                Categories
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336]"></span>
              <ul className="text-[16px] text-[#d7d0d0] font-medium mt-10">
                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Body Building
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Boxing
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Crossfit
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Fitness
                  </p>
                  <span>(4)</span>
                </li>

                <li className="flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px] fa-solid fa-chevron-right"></i>
                    &nbsp; Meditation
                  </p>
                  <span>(4)</span>
                </li>

                <li className="cursor-pointer flex justify-between border-b border-[#dcd9d9] pb-6 mb-10 hover:text-[#ff0336] ease-in duration-200">
                  <p>
                    <i className="text-[13px]  fa-solid fa-chevron-right"></i>
                    &nbsp; Yoga
                  </p>
                  <span>(4)</span>
                </li>
              </ul>
            </div>
            {/* recent posts */}
            
            <div className="flex flex-col bg-[#000000] my-[35px] p-[30px]">
              <p className="text-[18px] text-white font-bold mb-5">
                Recent Posts
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ffffff] mb-7"></span>
              <div className="flex flex-col gap-7 bg-black">
                {/*  */}
                <div className="flex gap-8 ">
                  <img src={Recent1} alt="recent_img" className="w-[10rem]" />
                  <div className="flex flex-col gap-4 justify-center">
                    <p className="text-[14px] text-[#ffffff] font-medium">
                      28 /  12 /  2023
                    </p>
                    <p className="text-[16px] text-white hover:text-[#ff0336] ease-in duration-200 cursor-pointer font-bold">
                      New Year offer
                    </p>
                  </div>
                </div>
               
              </div>
            </div>
            {/* popular tags */}
            {/*<div className="flex flex-col bg-[#000000] my-[35px] p-[30px]">
              <p className="text-[18px] text-white font-bold mb-5">
                Popular Tags
              </p>
              <span className="w-[40px] h-[3.5px] bg-[#ff0336] mb-7"></span>
              <div className="flex gap-3 text-[16px] text-[#646464] font-medium flex-wrap">
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Crossfit
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Fitness
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Gym
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Meditation
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Running
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Workout
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Yoga
                </p>
                <p className="bg-white py-[4px] px-[14px] hover:text-[#ff0336] ease-in duration-200 cursor-pointer">
                  #Boxing
                </p>
              </div>
          </div>*/}
            {/* banner */}
            <div className="blog-banner w-full h-[56rem] relative">
              <p className="absolute text-[34px] font-bold uppercase top-16 left-10 z-[2]">
                NLF
              </p>
              <span className="banner-shape top-14 left-0 z-[1] bg-white absolute w-[18rem] h-[60px]"></span>
              <div className="text-white flex flex-col absolute top-[10rem] left-10">
                <p className="text-[64px] font-bold">34%</p>
                <p className="text-[20px] font-bold -mt-[10px]">
                  Flat Discount
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
      </div>
    </>
  );
}

export default Blog;
