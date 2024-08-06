import React from "react";
import Gd from '../../../Component/Assets/Explore/GD.jpg';
import Gd1 from '../../../Component/Assets/Explore/GD1.jpg';
import Gd2 from '../../../Component/Assets/Explore/GD2.jpg';
import Gd3 from '../../../Component/Assets/Explore/GlassDetection.jpg'
import Header from "../../Header";
import Footer from "../../Footer";

const GlassDetection = () => {
    return(
        <>
        <Header/>
        <div className="relative h-full flex   items-center justify-center">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-20">Project :- Glass Detection</p> <br></br>
                        <p className="">
                        I developed a system designed to ensure that employees entering a factory<br></br> are wearing all required safety equipment. The solution I created leverages<br></br> real-time detection and verification technology. For the user interface, I used<br></br>
                        <span className="font-bold">React</span>, which provided a dynamic and intuitive front-end experience for monit-<br></br>-oring and managing safety compliance.  <span className="font-bold">Node.js</span> was utilized for the back-end,<br></br> handling the server-side operations, including data processing and integration<br></br>
                        with detection systems.  <span className="font-bold">MongoDB</span> served as the database, offering a scalable<br></br> solution for storing employee and equipment data. The design was crafted with<br></br>  <span className="font-bold">Tailwind CSS</span>, ensuring a modern, responsive, and user-friendly interface. This<br></br>
                        project highlights my ability to create practical solutions that enhance work-<br></br>-place safety through technology.
                         </p>
                    </div>
                    <div className="ml-4  mb-4">
                        <img
                            src={Gd3}
                            alt="Litti Chokha"
                            className="h-48 hover:scale-105 mr-3 mt-20"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-5">
                <div className='mr-4 mb-4'>
                    <img src={Gd} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                </div>
                <div className='mr-4 mb-4'>
                    <img src={Gd2} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                 </div>                
            </div>
            <div className='mr-4 mt-5'>
                    <img src={Gd1} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                </div>
           
            <Footer />
        </>
    )
}
export default GlassDetection