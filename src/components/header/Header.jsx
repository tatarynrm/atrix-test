import './Header.scss'
import logoSvg from '../../assets/images/svg/logo.svg'
import { IoMdHeartEmpty } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const Header = () => {
    return (
        <header>
            <div className="header__wrapper container">
                <div className="header__inner">
                    <div className="header__logo">
                        <img src={logoSvg} alt="logo" />
                    </div>
                    <div className="header__search">
                        <input className='header__input' type="text" placeholder='Search...' />
                        <span className='search-icon'><CiSearch size={20}/></span>
                    </div>
                    <div className="header__menu">
                        <IoMdHeartEmpty />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header