import { logo } from "../assets/img"

const Header = () => {
  return (
    <header className="flex justify-between gap-10 items-center m-auto pt-10 px-24">
        <div className="w-24">
            <img src={logo} className="" />
        </div>
        <nav className="text-white flex justify-between items-center w-full">
            <ul className="flex gap-6">
                <li>Product</li>
                <li>Company</li>
                <li>Connect</li>
            </ul>

            <ul className="flex gap-6 items-center">
                <a className="">Login</a>
                <a className="bg-white text-primary-lightRed font-semibold px-4 py-2 rounded-full">Sign Up</a>
            </ul>
        </nav>
    </header>
  )
}

export default Header