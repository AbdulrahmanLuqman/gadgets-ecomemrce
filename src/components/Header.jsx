import LogoAndSearch from "./LogoAndSearch"
import Navbar from "./Navbar"
import Percentage from "./Percentage"
import Welcome from "./Welcome"

const Header = () => {
  return (
    <header className="max-[1122px]:hidden">
        <Percentage />
        <Welcome />
        <LogoAndSearch />
        <Navbar />
    </header>
  )
}

export default Header