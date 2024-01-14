import { Link } from "react-router-dom";

function MainButton({ color, bg, cN, arrowColor, hover, text, goTo }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link
      onClick={goTop}
      to={goTo}
      className={`text-[15px]  ${color} ${bg} ${cN} text-center pt-[18px] font-[600] bg-[#ebca34] w-[20rem] h-[5.5rem] uppercase hero-cta relative ml-2 ${hover} `}
    >
      {text} &nbsp;
      <i className={`fa-solid fa-arrow-right text-[#000000] ${arrowColor}`}></i>
    </Link>
  );
}

export default MainButton;
