import React from 'react'
import MyImage from '../assets/myimage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';


const Home = () => {
    
    return (
        <>
        

            <div name="home" className='h-fit  w-full bg-gradient-to-b from-black via-black to-gray-800 py-10' style={{ zIndex: 1}} >
                <div data-aos="zoom-in-up" className='max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row xsm:pt-[50px] sm:pt-[150px] '>
                    <div   className='flex flex-col justify-center h-full'>
                        <h2 className='text-2xl sm:text-4xl font-semibold  text-sky-400 pb-2 xsm:text-center sm:text-start'>
                            Hello!!🙋🏻‍♀️,
                        </h2>
                        <h2 className='text-3xl sm:text-5xl font-bold text-purple-400 pb-2 xsm:text-center sm:text-start'>
                            I'am Ghatna Koshti
                        </h2>
                        <h2 className='text-2xl sm:text-4xl font-semibold  text-sky-400 pb-2 xsm:text-center sm:text-start'>
                            Web Developer💻
                        </h2>
                        <div className='xsm:block pt-3 sm:hidden'>
                            <img src={MyImage} alt="my profile" className='rounded-3xl mx-auto w-2/3 md:max-w-max shadow-lg shadow-blue-400' />
                        </div>

                        <p className=' xsm:mx-[10px] xsm:tracking-tight sm:tracking-normal sm:mx-0 text-gray-300 py-4 max-w-md text-justify '>
                            A web developer dedicated to enhancing user experiences. My expertise lies in frontend design, and I'm actively advancing my skills in backend development to become a versatile full-stack developer.
                        </p>
                        <div className='xsm:flex xsm:items-center xsm:justify-center sm:hidden'>
                            <Link to="projects" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 mx-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer'>
                                Projects
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </Link>

                            <a href={process.env.PUBLIC_URL + '/Ghatna_Koshti_Resume.pdf'} className='group text-white w-fit px-6 py-3 my-2 mx-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer'>
                                Resume
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </a>
                        </div>
                        <div className='xsm:hidden sm:flex'>
                            <Link to="projects" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-blue-500 cursor-pointer'>
                                Projects
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className='xsm:hidden sm:block'>
                        <img src={MyImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:max-w-max shadow-lg shadow-blue-400' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home