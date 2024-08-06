import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Img from '../../../Component/Assets/Explore/web.jpeg'
import Img1 from '../../../Component/Assets/Explore/web1.jpeg'
import Img2 from '../../../Component/Assets/Explore/web2.jpg'
import Img3 from '../../../Component/Assets/Explore/web3.webp'



const Web = () => {
    return (
        <>
            <Header />
            {/* <section className="relative h-screen"> */}
            <div>
                <div className="relative h-full flex   items-center justify-center">
                    <div className="flex flex-wrap items-center justify-center">
                        <div className="flex-1 text-left font-medium">
                            <p className="font-bold mt-4">Project :- Creating Web Pages</p> <br></br>
                            <p className="font-medium text-justify">
                                I am engaged in creating static web pages for my company using <span className="font-bold">Angular</span> <br></br>for the front end and&nbsp;
                                <span className="font-bold">CSS </span> for design. This technology stack allows me to <br></br>build highly efficient and scalable web applications with a robust framework
                                <br></br> that enhances productivity. By leveraging <span className="font-bold">Angular's</span> powerful features, such<br></br> as two-way data binding, modular architecture,
                                and comprehensive tooling,<br></br> I am  able to deliver high-quality, responsive web pages that meet our company's<br></br> needs. My work 
                                focuses on ensuring that the web pages are not only visually<br></br> appealing but also optimized for performance and user experience. Using&nbsp; 
                                <span className="font-bold">CSS </span><br></br> I create clean, modern designs that enhance the visual appeal and usability of<br></br> our web pages.
                            </p>

                        </div>
                        <div className="ml-4  mb-4">
                            <img
                                src={Img}
                                alt="Litti Chokha"
                                className="h-96 hover:scale-105 mr-3 mt-10"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-5">
                    <div className='mr-4 mb-4'>
                        <img src={Img1} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                    </div>
                    <div className="flex-1 text-center">
                        <img
                            src={Img2}
                            alt="Litti Chokha"
                            className="h-96 hover:scale-105 mr-3"
                        />
                    </div>
                    <div className="flex-1 text-center">
                        <img
                            src={Img3}
                            alt="Litti Chokha"
                            className="h-96 hover:scale-105 mr-3"
                        />
                    </div>
                </div>
                {/* </section> */}
            </div>
            <Footer />
        </>
    );
};

export default Web;














// import React from "react";
// import web from "../../../Component/Assets/Explore/web.jpeg"
// import Header from "../../Header";

// const Web = () => {

//     return(
//         <>
//         <Header/>
//         <p className="text-center font-medium text-white bg-design">
//         I am engaged in creating static web pages for my company using <span className="font-bold">Angular.</span><br></br> This technology allows me to build highly efficient and
//         scalable web applications with<br></br>  a robustframework that enhances productivity. By leveraging Angular's powerful features,<br></br> such as two-way data binding, modular
//         architecture, and comprehensive tooling, <br></br>I am able to deliver high-quality, responsive web pages that meet our company's needs.<br></br> My work focuses on ensuring
//         that the web pages are not only visually appealing but also<br></br> optimized for performance and user experience. This project has been a rewarding experience,<br></br>
//         enabling me to deepen my expertise in Angular and contribute effectively to my company's <br></br>digital presence.
//         </p>
//         <img src={web} />
//         </>
//     )
// }
// export default Web