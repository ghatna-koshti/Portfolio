import React from 'react'

const Contact = () => {
    return (
        <div name="contact" className=' w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white ' style={{ paddingTop: '103px' }}>
            <div name="contact-anchor"> 
                <div data-aos="flip-left" data-aos-duration="1200" className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full' >
                    <div className='pb-8 xsm:text-center sm:text-start'>
                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                        <p className='py-6'>Submit the form below to get in touch with me</p>
                    </div>
                    <div className='flex justify-center items-center '>
                        <form action="https://getform.io/f/a8a51273-9db6-4903-b278-f600037be0df" method="POST" className='flex flex-col w-full md:w-1/2'>
                            <input type="text" name="name" placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                            <input type="email" name="email" placeholder='Enter Your Email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                            <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' placeholder='Enter Your Message' ></textarea>
                            <button className='text-white bg-gradient-to-b  from-purple-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact