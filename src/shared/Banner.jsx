
function Banner({banner, heading, paragraph, btn1, btn2}) {
  return (
    <div>
       <div className="bg-gradient-to-r from-[#EE9AE5] to-[#5961F9] rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
                <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-10'>
                    {/* banner content  */}
                    <div className='md:w-3/5'>
                        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
                        <p className='text-[#EBEBEB] text-2xl mb-8'>{paragraph}</p>
                        <div className='justify-between space-x-5 space-y-4'>
                            <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>{btn1}</button>
                            <button className='py-3 px-8 bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300'>{btn2}</button>
                        </div>
                    </div>
                    {/* banner image  */}
                    <div>
                        <img src={banner} alt="" className='h-[386px]' />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Banner
