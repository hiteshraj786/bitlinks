import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const Poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});


export default function Home() {
  return (
    <main >
      <section className="grid grid-cols-2 h-[90vh]">
        <div className=" flex flex-col gap-4 justify-center items-center">
          <p className={`text-4xl font-bold ${Poppins.className}`}>
            The best URL shortner in the Market.
          </p>
          <p className="px-25 py-4 text-center text-lg text-gray-700">
            We are the most straightforward URL shortner in the world. Most of the url shortners will track you or ask you  to give your details for login. We understand your needs and hence we created this URL shortner
          </p>
          <div className="flex gap-3 items-center justify-center ">

            <Link href="/shorten"><button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-500 font-medium rounded-base text-lg px-10 py-4 mt-2 text-center leading-5 rounded-xl hover:text-purple-300 active:text-white transition-all ">Try Now</button></Link>


            <Link href="https://github.com/hiteshraj786" target="_blank"><button className="text-white  bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-500 font-medium mt-2 rounded-base text-lg px-10 py-4 text-center leading-5 rounded-xl hover:text-purple-300 active:text-white transition-all">GitHub</button></Link>
          </div>
        </div>

        <div className=" flex justify-start relative">
          <Image className="mix-blend-darken" alt="an image of a vector" src={"/vector.jpg"} width={700} height={500} />
        </div>


      </section>
    </main>
  );
}
