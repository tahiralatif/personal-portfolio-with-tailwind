import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between w-full py-5 px-16">
        <div className="logo text-2xl font-bold tracking-wide">
          <span className="text-cyan-400">T</span>ahira.
        </div>
        <ul className="navlist flex">
          <li>
            <Link href="/" className="text-white font-medium py-2 px-5 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(18,_247,_255,_0.6),_0_0_20px_rgba(18,_247,_255,_0.6),_0_0_30px_rgba(18,_247,_255,_0.6),_0_0_40px_rgba(18,_247,_255,_0.6),_0_0_70px_rgba(18,_247,_255,_0.6),_0_0_80px_rgba(18,_247,_255,_0.6),_0_0_100px_rgba(18,_247,_255,_0.6),_0_0_150px_rgba(18,_247,_255,_0.6)]">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-white font-medium py-2 px-5 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(18,_247,_255,_0.6),_0_0_20px_rgba(18,_247,_255,_0.6),_0_0_30px_rgba(18,_247,_255,_0.6),_0_0_40px_rgba(18,_247,_255,_0.6),_0_0_70px_rgba(18,_247,_255,_0.6),_0_0_80px_rgba(18,_247,_255,_0.6),_0_0_100px_rgba(18,_247,_255,_0.6),_0_0_150px_rgba(18,_247,_255,_0.6)]">About</Link>
          </li>
          <li>
            <Link href="/services" className="text-white font-medium py-2 px-5 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(18,_247,_255,_0.6),_0_0_20px_rgba(18,_247,_255,_0.6),_0_0_30px_rgba(18,_247,_255,_0.6),_0_0_40px_rgba(18,_247,_255,_0.6),_0_0_70px_rgba(18,_247,_255,_0.6),_0_0_80px_rgba(18,_247,_255,_0.6),_0_0_100px_rgba(18,_247,_255,_0.6),_0_0_150px_rgba(18,_247,_255,_0.6)]">Services</Link>
          </li>
          <li>
            <Link href="/skills" className="text-white font-medium py-2 px-5 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(18,_247,_255,_0.6),_0_0_20px_rgba(18,_247,_255,_0.6),_0_0_30px_rgba(18,_247,_255,_0.6),_0_0_40px_rgba(18,_247,_255,_0.6),_0_0_70px_rgba(18,_247,_255,_0.6),_0_0_80px_rgba(18,_247,_255,_0.6),_0_0_100px_rgba(18,_247,_255,_0.6),_0_0_150px_rgba(18,_247,_255,_0.6)]">Skills</Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-white font-medium py-2 px-5 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(18,_247,_255,_0.6),_0_0_20px_rgba(18,_247,_255,_0.6),_0_0_30px_rgba(18,_247,_255,_0.6),_0_0_40px_rgba(18,_247,_255,_0.6),_0_0_70px_rgba(18,_247,_255,_0.6),_0_0_80px_rgba(18,_247,_255,_0.6),_0_0_100px_rgba(18,_247,_255,_0.6),_0_0_150px_rgba(18,_247,_255,_0.6)]">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white font-medium py-2 px-5 hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(18,_247,_255,_0.6),_0_0_20px_rgba(18,_247,_255,_0.6),_0_0_30px_rgba(18,_247,_255,_0.6),_0_0_40px_rgba(18,_247,_255,_0.6),_0_0_70px_rgba(18,_247,_255,_0.6),_0_0_80px_rgba(18,_247,_255,_0.6),_0_0_100px_rgba(18,_247,_255,_0.6),_0_0_150px_rgba(18,_247,_255,_0.6)]">Contact</Link>
          </li>
        </ul>
        <div className="menu-icon text-2xl z-10 cursor-pointer ml-6 bg-cyan-400 rounded-sm text-[#250821] hidden sm:block">
          <i className="bx bx-menu"></i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
