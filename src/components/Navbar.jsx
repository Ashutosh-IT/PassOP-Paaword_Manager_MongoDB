const Navbar = function(){
    return (
        <nav className="bg-slate-800 text-white"> 
            <div className="mycontainer flex justify-between items-center py-5 px-4 h-14">
            <div className="logo font-bold text-white text-2xl">
                <span className="text-green-500">  &lt; </span>
                Pass
                <span className="text-green-500">OP/&gt; </span>
            </div>
            <button className=" text-white bg-green-700  rounded-full flex justify-between items-center">
                <img className="w-10 invert p-1"src="/icons/github.svg" alt="github" />
                <span className="font-bold px-2">GitHub</span>
            </button>
            </div>
        </nav>
    );
}

export default Navbar;