import TitleRed from "../../images/who-we-are/title-bg.svg";
import MainButton from "../MainButton";

function Featured() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <section id="featured" className="page-padding py-[12.5rem] bg-black">
        <div className="container">
          {/* title */}
          <div className="flex flex-col text-center items-center relative bg-yellow">
            <p className="font-semibold text-white text-[15px] relative uppercase z-10 ">
              OUR FEATURED CLASS
            </p>
            <img
              src={TitleRed}
              alt="text_bg"
              className="w-[24rem] absolute -top-[10px]"
            />
            <h2 className="text-[3.6rem] text-white font-bold my-10">
              We Are Offering Best Flexible Classes
            </h2>
          </div>
          {/* grid */}
          <div className="grid grid-cols-4 grid-rows-2 gap-7 h-full mt-7 md1000:flex md1000:flex-col">
            <div className="item-0-div relative">
              <div className="item-0 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Cycling</p>
              
              </div>
            </div>

            <div className="item-1-div relative">
              <div className="item-1 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Hit Workout</p>
          
              </div>
            </div>

            <div className="item-2-div relative">
              <div className="item-2 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Power Lifting</p>
           
              </div>
            </div>

            <div className="item-3-div relative">
              <div className="item-3 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Animal Flow</p>
             
              </div>
            </div>

            

            <div className="item-5-div relative">
              <div className="item-5 ease-in duration-[0.4s] p-6"></div>
              <div className="absolute z-10 bottom-10 left-10">
                <p className="text-white text-[3rem] font-bold">Body Building</p>
               
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* featured cta */}
      <div className="featured-cta flex justify-center text-left items-center md1000:bg-none md1000:bg-[#ff0336] ">
        <div className="container page-padding ">
          <div className="flex items-center md1000:flex-col md1000:gap-12  md1000:text-center">
            <h2 className="text-white font-bold text-[3.7rem] md1000:text-[3rem] max-w-6xl px-7 leading-[1.2] min450:text-[2.4rem] ">
              We Are Always Providing Best Fitness Service For You
            </h2>
            <MainButton
              color={`text-black`}
              bg={`bg-white`}
              text="Join With Us"
              arrowColor={`text-black`}
              goTo="/contact"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Featured;
