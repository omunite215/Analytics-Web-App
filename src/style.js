const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading1: "font-roboto text-[50px] font-[700] xs:text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    heading2: "font-roboto font-bold text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-roboto font-normal text-secondary text-paraText text-[18px] leading-[30.8px]",
    headingtitle: "font-roboto text-[50px] font-[700] xs:text-[48px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    pricingCardDefault: "text-white border border-[#0f1f4b] rounded-[30px] bg-[#0f1f4b] h-[440px] w-[340px] mr-8",
    pricingCardSelected: "text-[#172755] border border-none rounded-[30px] bg-white h-[450px] w-[350px] mr-8 shadow drop-shadow-2xl shadow-white",
    pricingCardDefaultSD: "text-white border border-[#0f1f4b] rounded-[20px] bg-[#0f1f4b] h-[340px] w-[240px] mr-8",
    pricingCardSelectedSD: "text-[#172755] border border-none rounded-[20px] bg-white h-[350px] w-[250px] mr-8 shadow drop-shadow-2xl shadow-white",

    bgimg: "max-w-[660px] max-h-[660px] top-[-261px] bg-[#8794BA] opacity-[0.07]",
};

export const layout = {
    section: `flex md:flex-row flex-row ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-row-reverse ${styles.paddingY}`,
}

export default styles;