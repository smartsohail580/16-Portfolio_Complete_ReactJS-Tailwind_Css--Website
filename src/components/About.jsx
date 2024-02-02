import aboutpic from '../assets/aboutpic.svg'
import pic2 from '../assets/pic2.svg'
function About() {
    return (
        <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id='about'>
            {/* first picture  */}
            <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src={aboutpic} alt="" />
                </div>

                {/* about content  */}
                <div className='md:w-1/2'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
                    <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                        'There are many different kinds of animals that live in China.</p>
                    <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
                </div>
            </div>
            {/* second pictures  */}
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                <div className='md:w-1/2'>
                    <img src={pic2} alt="" />
                </div>

                {/* about content  */}
                <div className='md:w-1/2'>
                    <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any <br />
                        <span className='text-secondary'>time convinent for you.</span></h2>
                    <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                        'There are many different kinds of animals that live in China.</p>
                    <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default About
