import React from 'react'
import weatherAppjs from '../assets/portfolio/weatherApp-js.jpg'
import newsapp from '../assets/portfolio/newsapp.jpg'
import qrcode from '../assets/portfolio/qrcode.jpg'
import textutils from '../assets/portfolio/TextUtils.jpg'
import weatherAppReact from '../assets/portfolio/weatherApp-React.jpg'
import todolist from '../assets/portfolio/todolist.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            name: 'News App',
            src: newsapp,
            demo:'https://drive.google.com/file/d/1Yo74jiVouF4ySX71pCbuCK0J6nSiZpXN/view',
            code:'https://github.com/ghatna-koshti/NewsWave-React'
        },
        {
            id: 2,
            name: 'Text Utilities',
            src: textutils,
            demo:'https://textutils-ghatna.netlify.app/',
            code:'https://github.com/ghatna-koshti/Textutils-Updated'
        },
        {
            id: 3,
            name: 'Weather App (React)',
            src: weatherAppReact,
            demo:'https://ghatna-koshti.github.io/weather-app-React/',
            code:'https://github.com/ghatna-koshti/weather-app-React'
        },
        {
            id: 4,
            name: 'Todo List (React)',
            src: todolist,
            demo:'https://ghatna-koshti.github.io/Todo-List-React/',
            code:'https://github.com/ghatna-koshti/Todo-List-React'
        },
        {
            id: 5,
            name: 'QR Code Generator (JS)',
            src: qrcode,
            demo:'https://ghatna-koshti.github.io/QR-Code-Generator-JS/',
            code:'https://github.com/ghatna-koshti/QR-Code-Generator-JS'
        },
        {
            id: 6,
            name: 'Weather App (JS)',
            src: weatherAppjs,
            demo:'https://ghatna-koshti.github.io/weatherApp/',
            code:'https://github.com/ghatna-koshti/weatherApp'
        }
    ]

    const openLinkInNewTab = (url) => {
        window.open(url, '_blank');
      }

    return (
        <div name="projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen xsm:pt-[70px] sm:pt-[451px] sm:pb-[354px] '> 
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >
                <div className='pb-8 xsm:text-center sm:text-start'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Projects</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                   
                    {
                        portfolios.map(({ id, src,demo,code,name }) => (
                            
                            <div key={id} data-aos="fade-up"   className='shadow-md shadow-gray-600 rounded-lg '>
                                <p className='text-lg font-bold py-2 text-center shadow-inner rounded-md shadow-gray-600'>{name}</p>

                                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button onClick={()=>openLinkInNewTab(demo)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <button onClick={()=>openLinkInNewTab(code)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                </div>
                            </div>
                        ))
                    }


                </div>


            </div>
        </div>
    )
}

export default Portfolio