const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 text-white flex flex-col justify-center items-center h-18">
      <div className="logo font-bold text-white text-2xl">
                <span className="text-green-500">  &lt; </span>
                Pass
                <span className="text-green-500">OP/&gt; </span>
            </div>
      <div className="flex items-center gap-2 justify-center">
      Created with <span className="text-red-500 text-3xl"> &#9829; </span> by Ashutosh Kumar
      </div>
    </footer>
  );
};
export default Footer;
