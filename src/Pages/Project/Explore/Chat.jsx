import React from "react";
import Chat from '../../../Component/Assets/Explore/chat.webp';
import Chat1 from '../../../Component/Assets//Explore/chat2.webp';
import Chat2 from '../../../Component/Assets/Explore/chat2.webp';
import Header from "../../Header";
import Footer from "../../Footer";



const App = () => {
    return (
        <>
            <Header />
            <div className="relative h-full flex   items-center justify-center">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="flex-1 text-left font-medium">
                        <p className="font-bold mt-4">Project :- ACL Chat</p> <br></br>
                        <p>
                            I worked on an innovative ACL Chat, I developed a comprehensive chat application<br></br> utilizing <span className="font-bold"> Angular</span> for the front-end, <span className="font-bold">Node.js</span> for the back-end, and <span className="font-bold">CSS</span> for the design.<br></br>
                            The front-end was crafted with <span className="font-bold"> Angular</span>, allowing for a dynamic and responsive user<br></br> interface. This choice enabled seamless integration of real-time messaging features,<br></br> 
                            ensuring a smooth user experience. On the back-end, I utilized <span className="font-bold">Node.js</span> to handle<br></br> server-side logic, manage user connections, and facilitate real-time data commu-<br></br>
                            -nication via WebSockets. The design was implemented with <span className="font-bold">CSS</span>, focusing on<br></br> creating a clean, user-friendly layout that enhances the overall usability of the <br></br>
                            application. This project showcases my ability to integrate various technol-<br></br>-ogies to build a functional and efficient chat system.

                        </p>
                    </div>
                    <div className="ml-4  mb-4">
                        <img
                            src={Chat1}
                            alt="Litti Chokha"
                            className="h-96 hover:scale-105 mr-3 mt-10"
                        />
                    </div>
                </div>
            </div>

            <div className="flex items-center mt-5">
                <div className='mr-4 mb-4'>
                    <img src={Chat} alt="Litti Chokha" className='h-96 hover:scale-105 ml-3' />
                </div>
                <div className="flex-1 text-center">
                    <img
                        src={Chat2}
                        alt="Litti Chokha"
                        className="h-96 hover:scale-105 mr-3"
                    />
                </div>

            </div>
            <Footer />

        </>
    )
}

export default App;