import MainButton from "../MainButton";

function PricingBox({ img, du, price }) {
  return (
    <>
      <div className="flex flex-col w-1/3 md1000:w-[40rem] bg-black shadow-xl relative min540:w-[100%]">
        <div
          style={{ transition: "all 0.3s" }}
          className="relative grayscale hover:grayscale-0"
        >
          <img src={img} alt="pricing_img" className="w-full h-full" />
          <div className="1 absolute bg-[#7e7b7b] text-[20px] font-bold w-[25rem] text-center py-6 text-[#ffffff] -bottom-[18px] left-0 right-0 mx-auto">
           {du}
          </div>
        </div>
        <div className="flex flex-col items-center pt-[20px] pb-[50px]">
          {/* price */}
          <p className="text-center text-[55px] font-bold relative py-[10px] text-white">
            <span className="text-[30px] text-[#ffffff] absolute font-normal top-8 -left-[3rem]">
            <i class="fa fa-inr"></i>
            </span>
            {price}
            {/*<span className="text-[22px] text-[#6d6d6d] absolute font-normal bottom-[25px] -right-[6rem]">
             Rs.
            </span>*/}
          </p>
          {/* text */}
          <div className="flex flex-col text-[16px] font-medium text-center gap-8 text-[#ffffff] ">
           {/* <p>Free Hand</p>
            <p>Gym Fitness</p>
            <p>Weight Loss</p>
            <p>1 week of Genral training</p>
          <p>Cycling</p>*/}
          </div>

          <MainButton
            color={`!text-white`}
            bg={`bg-[#ebca34]`}
            text="purchase now"
            arrowColor={`!text-white`}
            cN="pricing-cta"
            goTo="/contact"
          />
        </div>
      </div>
    </>
  );
}

export default PricingBox;
