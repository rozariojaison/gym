import Footer from "../components/Footer/Footer";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

function Login() {
  
 
  return (
    <>
      <section className="bg-black">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-[#ebca34] absolute bottom-[25px] text-[3rem] font-bold">
            Contact Us
          </h1>
        </div>
        {/* contact */}
        <div className="bg-black py-[12rem] page-padding grid grid-cols-2 container gap-10 items-center md1000:grid-cols-1 ">
          {/* first col */}
          <div className="md1000:w-[60%] md1000:flex md1000:flex-col md1000:mx-auto min800:w-[90%] min620:w-full">
            <h2 className="text-[#ebca34] text-[36px] font-bold leading-[1.2]">
              We are here for help you! To Shape Your Body.
            </h2>
            <p className="text-[16px] w-[95%] text-[#ffffff] font-medium my-[40px]">
              At Next Level fitness, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-y-20 min620:grid-cols-1 min620:mx-auto">
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 text-[#ebca34]">
                 Bengaluru, Karnataka 
                </h3>
                <span className="bg-[#ebca34] w-[50px] h-[4px] absolute top-[33px]"></span>
                <p className="text-[15px] font-medium text-[#ffffff]">
                 <br /> 2nd Floor, Krishnappa Building,
                <br /> No. 25-117/2
                <br/> Horamavu Agara Rd,
                <br /> Opp. Shilpa Bakery
                </p>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 text-[#ebca34]">Opening Hours</h3>
                <span className="bg-[#ebca34] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#ffffff] paddind 20px"  >

                  <p>Mon to Sta: 6:30 am — 10:00 pm</p>
                  <p>Sun : 8:00 am — 12:00 am
                    <br /> Sun : 5:00 pm - 8:00 pm 
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 text-[#ebca34]">Information</h3>
                <span className="bg-[#ebca34] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[15px] font-medium text-[#ffffff]">
                  <p> +91 - 9739112127
                    <br /> +91 - 8892573370
                  </p>
                  
                <a href="">NextLevelFitness@gymail.com</a>
                </div>
              </div>
              {/*  */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10 text-[#ebca34]">Follow Us On</h3>
                <span className="bg-[#ebca34] w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-white flex gap-5"> 
                 <a href="https://www.facebook.com/nextlevelfitness22"> <i className="fa-brands fa-facebook-f px-[16px] py-[13px] bg-[#1877F2]  rounded-full cursor-pointer hover:bg-[#ebca34] ease-in duration-200 hover:text-white"></i></a>
                  <i className="fa-brands fa-twitter p-[13.5px] bg-[#1DA1F2] rounded-full cursor-pointer hover:bg-[#ebca34] ease-in duration-200 hover:text-white"></i>
                 <a href="https://www.instagram.com/nextlevelfitness.official/"> <i className="fa-brands fa-instagram p-[13.5px] bg-[#ff0336]  rounded-full cursor-pointer hover:bg-[#ebca34] ease-in duration-200 hover:text-white"></i></a>
                  <i className="fa-brands fa-pinterest-p p-[13.5px] bg-[#d64848] rounded-full cursor-pointer hover:bg-[#ebca34] ease-in duration-200 hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>
          
            
          
          {/* second col ---*/}
         
         <form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#000000] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full" 
           id ="collo"
          >
           
            <h3 className="text-[28px] font-bold mb-14 text-[#ebca34]">Leave Us Your Info</h3>
            <span className="bg-[#ebca34] w-[50px] h-[4px] absolute top-[77px]"></span>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
              id="name1"
             
            ></input>
            <input
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
              id="emailid"
           
            ></input>
            <select className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            id="wad">
              <option>Select Class</option>
              <option>Body Building</option>
              <option>Functional Training</option>
              <option>Weight Loss</option>
              <option>Strengh Training</option>
              <option>Personal Training </option>
              <option>Workout</option>
              <option>Personalized Diet Plans </option>
              <option>Group Hit Classes</option>
              <option>Cycling</option>
              <option>other</option>
         
            </select>
            <textarea
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              id="msgContent"
            
            ></textarea>
            <button
              type="submit"
              className="text-white bg-[#ebca34] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
              id
            >
              submit now
            </button>

          
  </form>
  
        
        </div>
        
        {/* map */}
        /*<iframe
          
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.9685038637863!2d77.6485971!3d13.0376768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17472d94fd1b%3A0x181154c220fe169d!2sNext%20Level%20Fitness!5e0!3m2!1sen!2sin!4v1704538898405!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy"
          samesite="Strict"
          title="map"
          style={{ width: "100%", height: "45rem", border: "0px",background: "black" }}
        ></iframe>
        
        <Footer />
       
      </section>
    </>
  );
}

export default Login;
