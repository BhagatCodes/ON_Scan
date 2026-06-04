const Navbar = () => {
    return(
        <div className="fixed top-12 flex items-center justify-between max-w-[85%] sm:max-w-[60%] w-full left-1/2 translate-x-[-50%] px-4 sm:px-8 py-4 bg-white rounded-full shadow-[0_4px_8px_2px_#00000022]">
            <h3 className="text-[16px] sm:text-[20px] font-bold bg-gradient-to-r from-[#AB8C95] via-[#000000] to-[#8E97C5] text-transparent bg-clip-text tracking-tight uppercase">On Scan</h3>
            <button className="text-[16px] text-white px-3 sm:px-6 py-1.5 sm:py-3 rounded-full bg-[#6E7AFF] shadow-[inset_0_2px_10px_rgba(255,255,255,0.3),_0_4px_4px_rgba(0,0,0,0.2)] border border-white/20">Upload Resume</button>
        </div>
    )
}

export default Navbar;