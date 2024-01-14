import TestimonialImg from "../../images/testimonials/testimonial-new.jpg";
import TitleBg from "../../images/pricing/titlebg.svg";
import TestimonialBoxes from "./TestimonialBoxes";
import Logo1 from "../../images/testimonials/logo1.png";
import Logo2 from "../../images/testimonials/logo2.png";
import Logo3 from "../../images/testimonials/logo3.png";
import Logo4 from "../../images/testimonials/logo4.png";
import Logo5 from "../../images/testimonials/logo5.png";

function Testimonials() {
  return (
    <><div className="bg-black">
      {/* testimonials div */}
      <section className="my-[10rem] mx-auto bg-black">
        <div className="container page-padding bg-black">
          {/* title */}
          <div className="text-center relative items-center w-full flex flex-col bg-[#5c1313]">
            <p className="text-white  relative z-10 text-[16px] uppercase font-bold -mb-[10.5rem]">
              Testimonials
            </p>
            <img
              alt="title_img"
              src={TitleBg}
              className="w-[21rem] absolute -top-[6px] "
            />
          </div>

          {/* testimonials wrapper */}
          <div className="border-[#000000] mt-[17rem] md1000:mt-[9rem] bg-[#1b1919] border-solid border-[9px] p-[30px] min540:h-[48rem] min375:h-[60rem]">
            <div className="bg-black overflow-x-clip w-full h-[33rem] relative">
              {/* img */}
              <img
                alt="girl_img"
                src={TestimonialImg}
                className="absolute bottom-0 -left-10 z-20 h-[46rem] rounded-tr-[200px] md1000:hidden"
              />

              {/* all text-boxes */}
              <div className="flex">
                {/* text box */}
                <TestimonialBoxes />
              </div>

              {/* buttons */}
              <div className="flex gap-3 absolute bottom-[25px] right-[35px] z-20 min540:-bottom-[52px] min540:right-[17px] bg-black">
                <button
                  title="left"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-[#888686] text-black text-2xl hover:bg-[#f8ea53] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                  title="right"
                  style={{ transition: "all 0.2s" }}
                  className="py-5 px-7 bg-[#888686] text-black text-2xl hover:bg-[#f8ea53] hover:text-white"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* brand logos */}
        <div
          className="flex gap-5 justify-center mt-32 border-b border-solid border-[#64646438] pb-28 flex-wrap
        "
        >
          <img
            src={Logo1}
            alt="logo"
            className="scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo2}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo3}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo4}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
          <img
            src={Logo5}
            alt="logo"
            className=" scale-[.8] hover:invert"
            style={{ transition: "all 0.3s" }}
          />
        </div>
      </section>
      </div>
    </>
  );
}

export default Testimonials;
