import Header from "./Header"

const Hero = () => {
  return (
    <section className="bg-primary-lightRed rounded-bl-[80px] bg-bg-pattern-intro-desktop bg-100 bg-top-right bg-no-repeat">
        <Header />
        <div className="text-white text-center flex flex-col items-center justify-center gap-9 h-96 ">
            <div className="flex flex-col gap-2">
                <h1 className="text-5xl font-overpass font-semibold">A modern publishing platform</h1>
                <h3 className="text-overpass">Grow your audience and build your online brand</h3>
            </div>

            <div className="flex gap-4 justify-center">
                <a href="#" className=" border-white border-2 px-4 py-1.5 rounded-full bg-white text-primary-lightRed font-semibold">Start for Free</a>
                <a href="#" className=" border-white border-2 px-4 py-1.5 rounded-full font-semibold">Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default Hero