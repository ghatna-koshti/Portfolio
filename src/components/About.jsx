import React from 'react'

const About = () => {
    return (
        <div name="about" className='w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white xsm:pt-[65px] sm:pt-[110px] '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 xsm:text-center sm:text-start'>
                    <p className='text-4xl  font-bold inline border-b-4 border-gray-500   '>
                        About Me
                    </p>
                    <p className='text-lg mt-14 text-justify xsm:mx-[10px] sm:mx-0 xsm:tracking-tighter sm:tracking-normal '>
                        <span className='text-2xl mt-20 text-justify gradient-text font-semibold '>Hi there.! I'm Ghatna Koshti</span>, a recent graduate with a Bachelor of Engineering degree in Electronics and Communication from L.D College of Engineering. My passion lies in the world of frontend development, where I've honed my skills in creating engaging and user-friendly interfaces. With an eye on the future, I aspire to delve into backend development and become a proficient full-stack developer, eager to contribute my expertise to innovative projects.
                    </p>
                    <br />
                    <p className='text-lg text-justify xsm:mx-[10px] sm:mx-0 xsm:tracking-tighter sm:tracking-normal'>
                        My main goal is to find an interesting job that matches my skills and interests. I'm determined to build a successful career in web development, using what I've learned and my passion for coding to do great work. I'm excited about opportunities that will help me learn and grow as a developer and make a positive impact in the tech world. If you have a role that aligns with my interests and goals, I'd welcome the opportunity to explore how I can contribute to your organization's growth and innovation.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About