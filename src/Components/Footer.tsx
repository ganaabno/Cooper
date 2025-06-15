import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="w-full bg-slate-950 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo and Title */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="w-20 invert" />
          <span className="text-white text-xl font-semibold">Your Project</span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-center md:text-left max-w-xl leading-relaxed">
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis.
        </p>
      </div>

      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Project. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
