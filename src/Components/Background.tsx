import backgroundp from '../assets/bg.png';
import laptop from '../assets/laptop.png';

function Background() {
    return (
        <div>
            <div className="relative">
                <img src={backgroundp} alt="bg" className="w-full h-[850px]" />
                <img src={laptop} alt="lt" className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2" />
                <p className="font-extralight tracking-wider text-xl text-white absolute bottom-[630px] left-1/2 transform -translate-x-1/2">best software for your office</p>
                <h1 className='text-4xl font-bold text-shadow text-white absolute bottom-[580px] left-1/2 transform -translate-x-1/2'>TRY COOPER TODAY!</h1>
                <p className='font-extralight tracking-wider text-white absolute bottom-[520px] left-1/2 transform -translate-x-1/2'>Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh <br />
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>

            <div className='flex items-center justify-center p-24 transform text-center text-3xl font-md text-slate-900'>
                <h2 className=''>
                    Best software to manage <br />
                    your office <span className='text-blue-700'>work and workers!</span>
                </h2>
            </div>
        </div>
    )
}

export default Background