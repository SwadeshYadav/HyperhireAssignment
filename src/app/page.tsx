import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CardsContainer from "./components/CardsContainer";
import { Description, Drafts, Sell } from "@mui/icons-material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
      <Navbar />
      <main className="container mx-auto text-white px-4">
        <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-start">
          <div className="flex-1 text-center md:text-left p-0">
            <h1 className="text-xl md:ml-0 ml-14 p-1 m-2 font-medium bg-gray-50 rounded text-cyan-500 w-fit">
              full time, part time
            </h1>
            <h2 className="md:text-3xl text-xl font-bold">with the best skills</h2>
            <h2 className="md:text-2xl text-xl font-bold">
              Are you looking for foreign talent?
            </h2>
            <h2 className="md:text-2xl text-[20px] font-medium mt-4 mx-auto md:mx-0">
              Without the burden of legal and personnel management
            </h2>
            <h4 className="mt-2 text-xl font-medium">Need a developer?</h4>

            {/* New Section */}
            <div className="md:mt-8 mt-0 flex flex-col md:flex-row justify-between text-center md:text-left space-y-4 md:space-y-0 md:space-x-8">
              <div className="md:w-1/3 p-2">
                <hr />
                <h4 className="text-[16px] mt-1 font-semibold">
                  Average monthly salary of 1.2 million won
                </h4>
                <h5 className="text-[15px]">
                  Wages are calculated based on your country.
                </h5>
              </div>
              <div className="md:w-1/3 p-2">
                <hr />
                <h4 className="text-[16px] mt-1 font-semibold">
                  Up to 3 personnel changes
                </h4>
                <h5 className="text-[15px]">
                  Don&apos;t worry if you don&apos;t fit the job when you hire them.
                </h5>
              </div>
              <div className="md:w-1/3 p-2">
                <hr />
                <h4 className="text-[16px] mt-1 font-semibold">
                  Average 3 days, maximum 10 days
                </h4>
                <h5 className="text-[15px]">
                  Even if you need someone urgently, quick hiring is possible.
                </h5>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 ml-32 md:ml-0">
            <CardsContainer />
          </div>
        </section>

        <section className="text-center md:p-8 p-4 mt-10 md:mt-12">
          <div className="flex flex-wrap justify-center space-x-4 space-y-4 md:space-y-0 ">
            <button className="flex items-center bg-gradient-to-r from-cyan-600 to-blue-400 shadow text-white px-6 py-3 rounded-lg">
              <AttachMoneyIcon className="mr-2" />
              Overseas Marketing
            </button>
            <button className="flex items-center bg-gradient-to-r from-cyan-600 to-blue-400 shadow text-white px-6 py-3 rounded-lg">
              <Description className="mr-2" />
              Publisher
            </button>
            <button className="flex items-center bg-gradient-to-r from-cyan-600 to-blue-500 shadow text-white px-6 py-3 rounded-lg">
              <Drafts className="mr-2" />
              Cadwon (drafter)
            </button>
            <button className="flex items-center bg-gradient-to-r from-cyan-600 to-blue-500 shadow text-white px-6 py-3 rounded-lg">
              <Sell className="mr-2" />
              Overseas Sales
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
