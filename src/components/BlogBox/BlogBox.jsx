import MainButton from "../MainButton";

function BlogBox({ img, title }) {
  return (
    <>
      <div>
        <img src={img} alt="blog_img" />
        <p className="font-medium text-[14px] text-[#646464] pt-8 pb-4">
          <i className="fa-solid fa-layer-group text-[#ff0336] text-[16px]"></i>
          &nbsp; By <b>Admin</b> | 28 / 12 / 2023 | New Year offer
        </p>
        <h2 className="text-[3rem] font-bold mb-6">{title}</h2>
        <p className="font-medium text-[16px] text-[#646464] mb-24">
         We at Next level Fitness are pleased to bring to you our 
         Exciting New Year Offer. <br />
         This time for 2024 we are offering our yearly Membership for 7,499/-pa.
         <br / >
          With is this new offer we at Nextlevel fitness are offering for a limited time,<br /> an extra month to the yearly membership.
          <br /> This offer is valid till 31 of January 2024.
        </p>
        <MainButton
          color={`!text-white`}
          bg={`bg-[#ff0336]`}
          text="purchase now"
          arrowColor={`!text-white`}
          cN="pricing-cta blog-cta"
        />
      </div>
    </>
  );
}

export default BlogBox;
