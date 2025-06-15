import Mac from "../assets/Mac.png";
import Background from "./Background";
import Cards from "./Cards";
import ParagraphSwitcher from "./ParagraphsSwitcher";
import Macs from "../assets/Macs.png";
import videoBackground from "../assets/videoBg.jpg";
import PriceTag from "./PriceTag";
import reviewImg from "../assets/review.jpg"
import Sponsor from "./Sponsor";
import Footer from "./Footer";

function Hero() {
  return (
    <div>
      <Background />
      <Cards></Cards>
      <div className="flex justify-center items-center mt-4">
        <div className="flex items-center gap-10 max-w-6xl">
          <div className="flex flex-col max-w-md gap-4">
            <h3 className="text-3xl font-bold">
              No more confusion and complex to manage your office.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi.
            </p>
          </div>

          <div>
            <img src={Mac} alt="macbook" className="w-[500px] h-auto" />
          </div>
        </div>
      </div>

      <div className="bg-sky-400 flex justify-between px-96 py-14 text-white my-14">
        <div>
          <h4 className="text-2xl">
            Need a perfect software to manage everything?
          </h4>
          <p className="tfont py-5">
            Nam liber tempor cum soluta nobis eleifend option congue nihil
            imperdiet doming id <br />
            quod mazim placerat facer possim assum. Typi non habent claritatem
            insitam.
          </p>
        </div>
        <div className="tfont flex items-center gap-14">
          <button className="p-3 border-[1px] border-white rounded-3xl transition-all duration-[400ms] ease-in-out hover:bg-sky-600 hover:border-sky-600">
            PURCHASE NOW
          </button>
          <a href="#" className="ahover">
            TRY OUR DEMO
          </a>
        </div>
      </div>

      <div className="flex justify-center text-center text-3xl">
        <h5>
          More than <span className="text-sky-400">20,000+ Customers,</span>
          <br />
          see some wishes here.
        </h5>
      </div>

      <div>
        <ParagraphSwitcher />
      </div>

      <div className="flex justify-center">
        <img src={Macs} alt="macsPic" />
      </div>
      <div>
        <div className="flex justify-center p-10 text-center">
          <h6 className="text-3xl text-slate-800">
            Our software is totally customisable and
            <br />
            easy to use,{" "}
            <span className="text-sky-400"> no need to know anything!</span>
          </h6>
        </div>
        <div className="flex justify-center">
          <button className="text-md text-white border-[3px] border-sky-300 bg-sky-500 rounded-4xl py-3 px-7 transition-all duration-[400ms] ease-in-out hover:bg-slate-900 ">
            PURCHASE NOW
          </button>
        </div>
      </div>

      <div>
        <img src={videoBackground} alt="videoBgPic" className="w-full py-14" />
        <a href="https://www.example.com">
          <button>BRUH</button>
        </a>
      </div>

      <div className="flex justify-center text-center">
        <h6 className="text-3xl">
          Select your <span className="text-sky-400">plan as your choise</span>,{" "}
          <br />
          no need to pay extra money.
        </h6>
      </div>

      <PriceTag />

      <div className="flex justify-between mx-[300px] my-14">
        <div>
          <img src={reviewImg} alt="rev" className="shadow-2xl" />
        </div>
        <div>
          <h6 className="text-3xl font-light">Try our free trial today. If you don’t like, <br /> you can cancel it anytime!</h6>
          <p className="font-light py-12">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse <br />
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et <br />
            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril <br />
            delenit augue duis dolore te feugait nulla facilisi.</p>
            <button className="text-white rounded-4xl text-sm bg-sky-400 border-sky-300 px-7 py-3 border-4 hover:bg-sky-900 hover:text-white transition-all duration-[400ms] ease-in-out">TRY OUR DEMO!</button>
        </div>
      </div>

      <Sponsor />

      <Footer />
    </div>
  );
}

export default Hero;
