/* eslint-disable react/prop-types */

import { Parallax } from 'react-parallax';


const Cover = ({ img, title, subtitle }) => {

    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[90vh]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content w-[900px] h-[300px]">
                    <div className=" bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center">
                        <h1 className="mb-5 text-5xl font-bold uppercase font-cinzel">{title}</h1>
                        <p className="mb-5 font-cinzel">{subtitle}</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;