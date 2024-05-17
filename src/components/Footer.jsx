import { logo } from "../assets/img"

const Footer = () => {
  return (
    <footer className="flex justify-around bg-neutral-VeryDarkBlackBlue text-sm py-16 px-32 rounded-tr-[80px]">
        <div className="w-[20%]">
            <img src={logo} className="w-26" />
            </div>
        
        <div className="w-[80%] flex flex-row justify-around">
            <div className="flex flex-col gap-6">
                <p className="text-white font-semibold font-ubuntu tracking-[0.1rem]">Product</p>
                <ul className="text-zinc-500  font-medium flex flex-col gap-2 font-ubuntu">
                    <li><a href="#">Overview</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Integrations</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-6">
                <p className="text-white font-semibold font-ubuntu tracking-[0.1rem]">Company</p>
                <ul className="text-zinc-500  font-medium flex flex-col gap-2 font-ubuntu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </div>

            <div className="flex flex-col gap-6">
                <p className="text-white font-semibold font-ubuntu tracking-[0.1rem]">Connect</p>
                <ul className="text-zinc-500  font-medium flex flex-col gap-2 font-ubuntu">
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Newsletter</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
        </div>
  
{/*         <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
        </div> */}
    </footer>
  )
}

export default Footer