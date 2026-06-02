import bgAuth from '../assets/public/images/bg-auth.svg';

const SignIn = () => {
    return(
        <div className="w-full h-fit p-4 sm:p-7">
            <div className= "bg-no-repeat bg-cover rounded-[40px] w-full h-full py-8 sm:py-[60px] flex flex-col items-center justify-center gap-3 sm:gap-6" style={{ backgroundImage: `url(${bgAuth})` }}>
                <h1 className='font-mona text-[36px] sm:text-[48px] font-bold bg-gradient-to-r from-[#AB8C95] via-black to-[#8E97C5] bg-clip-text text-transparent'>Welcome Back</h1>
                <p className='text-[#475467] text-[20px] sm:text-[24px] font-mona mb-3 sm:mb-[26px]'>Log In to Continue Your Job Journey</p>
                <div className='max-w-[90%] sm:max-w-[592px] w-full px-4 py-[24px] bg-gradient-to-b from-[#C1D3F81A] to-[rgba(167,191,241,0.3)] rounded-[60px]'>
                    <form className='flex flex-col gap-7 bg-white rounded-[40px] px-4 py-4 sm:px-12 sm:py-8 w-full'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[#475467] text-[16px] sm:text-[20px]'>Email Address</label>
                            <input type="text" placeholder="Enter Your Email" className='text-black font-normal placeholder:text-[#98A2B3] placeholder:font-light px-5 py-3 shadow-[inset_0_0_12px_#2463EB33] focus-visible:outline-[#8E98FF] rounded-lg text-[16px] sm:text-[20px]'></input>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-[#475467] text-[16px] sm:text-[20px]'>Password</label>
                            <input type="password" placeholder="Enter your password" className='text-black font-normal placeholder:text-[#98A2B3] placeholder:font-light px-5 py-3 shadow-[inset_0_0_12px_#2463EB33]  focus-visible:outline-[#8E98FF] rounded-lg text-[16px] sm:text-[20px]'></input>
                        </div>
                        <button className='font-mona text-[20px] text-white py-3 w-full rounded-full bg-gradient-to-b from-[#8E98FF] to-[#606BEB]'>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;