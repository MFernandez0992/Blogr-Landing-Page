import { illustrationPhones } from "../assets/img"

const Banner = () => {
  return (
    <section className="bg-neutral-VeryDarkBlackBlue h-72 flex items-center justify-around bg-pattern-circles bg-70 bg-no-repeat bg-left-top px-24 gap-6 rounded-bl-[80px] rounded-tr-[80px]">
            <img src={illustrationPhones} className="w-[400px] mt-8" />
        <div className="w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-overpass font-bold text-white">State of the Art Infrastructure</h2>
            <p className="text-neutral-GrayishBlue font-overpass">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
    </section>
  )
}

export default Banner