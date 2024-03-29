import TitleRed from "../../images/who-we-are/title-bg.svg";
import BlogBox from "./BlogBox";

function Blog() {
  return (
    <>
      <section id="blog" className="bg-black ">
        <div className="container page-padding py-[10rem]">
          {/* title div -- */}
          <div className="flex flex-col text-center relative items-center">
            <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8">
              latest blog
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[23rem] absolute -top-[10px]"
            />

            <h2 className="text-[3.4rem] font-bold mb-4 text-white">Our Recent News</h2>
            <p className="text-[#c1bebe] font-medium text-[15px] ">
               Vist our site to stay up to date on any new announcement
              <br /> And upcoming offer
            </p>
          </div>

          {/* blog boxes */}
          <div className="flex gap-6 w-full mt-[5rem] md1200:justify-center flex-wrap border-[#6a3434]">
            <BlogBox
              bgClass="box1Bg"
              date="28.12.2023"
              title="New Year offer"
              description="Grab the New Year offer before it ends #nextlevelfitness. "
            />
        
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
