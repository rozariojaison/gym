import { useState } from "react";
import ClassesBox from "../components/ClassesBox/ClassesBox";
import Footer from "../components/Footer/Footer";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

       
        <div
          className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
            load ? "grid"  : "hidden"
          }`}
        >
          <ClassesBox
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesBox
            bgImg="meditaion-bg"
            title="Animal Flow"
            trainer="Maria Mich"
            date="Fri: 1:00 pm"
          />
       
          <ClassesBox
            bgImg="karate-bg"
            title="Hit Workout"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesBox
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 pm"
          />
          <ClassesBox
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesBox
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wen: 9:00 pm"
          />
          <ClassesBox
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Thu: 12:00 am"
          />
          <ClassesBox
            bgImg="bodybuilding-bg"
            title="Body Building"
            trainer="Jake Paul"
            date="Mon: 8:00 pm"
          />
          
          <ClassesBox
            bgImg="fitness-bg"
            title="Fitness"
            trainer="Mia Malkova"
            date="Sun: 5:00 pm"
          />
        </div>

        

        <Footer />
      </section>
    </>
  );
}

export default Classes;
