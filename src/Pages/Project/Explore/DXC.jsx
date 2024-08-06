import React from "react";
import Dect from "../../../Component/Assets/Explore/detection.jpg";
import Dect1 from "../../../Component/Assets/Explore/detection1.jpg";
import Dect2 from '../../../Component/Assets/Explore/detection2.jpg';
import Dect3 from '../../../Component/Assets/Explore/detection3.webp.jpg';
import Header from "../../Header";
import Footer from "../../Footer";


const Detection = () =>{

    return(
        <>
        <Header/>
        {/* <Header /> */}
            <div className="relative h-full flex   items-center justify-center">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-20">Project :- Digital Experiance(DXC)</p> <br></br>
                        <p className="">
                        I demonstrated the application of cutting-edge AI and ML technologies, specifically focusing on<br></br> Natural Language Processing (NLP), Computer Vision, and Speech Recognition. The project<br></br>
                        highlighted the potential of these technologies in various sectors, including hospitals, schools,<br></br> and worksites. For the front-end, I used <span className="font-bold">React</span>, which allowed me to create an interactive and user-<br></br>
                        -friendly interface. The back-end was powered by <span className="font-bold">Node.js</span>, ensuring robust server-side logic and<br></br> efficient data handling. <span className="font-bold">MongoDB</span> was used as the database, providing a flexible and scalable<br></br> solution 
                        for storing and retrieving data. The design was implemented with <span className="font-bold">Tailwind CSS</span>, enab-<br></br>-ling a sleek, responsive, and visually appealing layout. This project exemplifies my ability to <br></br>integrate 
                        advanced technologies to build innovative solutions that can be applied across <br></br>multiple domains.
                        </p>
                    </div>
                    <div className="ml-4  mb-4">
                        <img
                            src={Dect}
                            alt="Litti Chokha"
                            className="h-48 hover:scale-105 mr-3 mt-20"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-5">
                <div className='mr-4 mb-4'>
                    <img src={Dect1} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                </div>
                <div className='mr-4 mb-4'>
                    <img src={Dect2} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                </div>                
            </div>
            <div className='mr-4 mt-5'>
                    <img src={Dect3} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                </div>
           
            <Footer />

        </>
    )
}
export default Detection;
