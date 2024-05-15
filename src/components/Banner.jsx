import { illustrationPhones } from "../assets/img"

const Banner = () => {
  return (
    <section className="bg-neutral-VeryDarkBlackBlue flex items-center bg-pattern-circles bg-50 bg-no-repeat bg-right-bottom">
        <div>
            <img src={illustrationPhones} />
        </div>
        <div className="w-1/2">
            <h2 className="text-3xl font-overpass font-bold text-white">State of the Art Infrastructure</h2>
            <p className="text-neutral-GrayishBlue font-overpass">With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
        This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
        </div>
    </section>
  )
}

export default Banner