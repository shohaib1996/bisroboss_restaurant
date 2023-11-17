/* eslint-disable react/prop-types */



const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center ">
            <p className="text-[#D99904] font-inter">{subHeading}</p>
            <p className="text-3xl border-y-4 mt-3 p-3 w-4/12 mx-auto mb-2 font-inter">{heading}</p>
            
        </div>
    );
};

export default SectionTitle;