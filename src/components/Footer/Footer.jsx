import FooterLogo from "../../images/logo/logo-footer.svg";

function Footer() {
  return (
    <>
      <footer className="bg bg-black">
        <div className="container page-padding py-[10rem]">
          {/* footer div all */}
          <div className="flex justify-between min620:flex-col min620:items-center min620:text-center min620:gap-[5rem] !text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/3 gap-8">
              <img src={FooterLogo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#ffffff]">
                Take your health and body to the next level with our
                comprehensive program designed to help you reach your fitness
                goals.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#000000] min540:justify-center">
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                 
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-twitter wbg-[#ffffff] p-4 rounded-full hover:bg-[#ff0366] hover:text-white text -bg bg-white" 
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-pinterest-p bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#ff0366] hover:text-white"
                ></i>
                <i
                  style={{ transition: "all 0.3s" }}
                  className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#ff0366] hover:text-white"
                ></i>
              </div>
              <p className="text-[16px] font-medium text-[#ffffff]">
                Privacy Policy | © {new Date().getFullYear()}   <br />{""}
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/rozariojaison/"
                >
                  Rozario
                </a>
              </p>
            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main texr- text-[#ffffff]">WHAT WE OFFER</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Body Building
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Functional Training
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Weight Loss
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Strength Training
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Personal Training
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Personalized Diet Plans
              </p>
              <p className="text-[16px] hover:text-[#ff0366] cursor-pointer text-[#ffffff] font-medium hover:font-bold">
                Group Hit Classes
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] font-bold footer-main text-[#ffffff]">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#ff0366]"></span>

              <p className="text-[16px]  text-[#ffffff] font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-[#ffffff] font-medium">
                6:00am - 10:00pm
              </p>
              <p className="text-[16px] text-[#ffffff] font-bold">Saturday:</p>
              <p className="text-[16px] text-[#ffffff] font-medium">
                7:00am - 10:00pm
              </p>
              <p className="text-[16px] text-[#ffffff] font-bold ">
                Sunday 
              </p>
              <p className="text-[16px] text-[#ffffff] font-medium "> 
              8:00am - 11:am
              </p>
              <p className="text-[16px] text-[#ffffff] font-medium ">
                5:00am - 10:00pm
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
