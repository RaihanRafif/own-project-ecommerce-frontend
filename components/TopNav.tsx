import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TopNav() {
    return (
        <header className="flex items-center px-[135px] py-[40px] h-10 border-b border-black">
            <div className="mainIcon">
                <h1 className="font-league-spartan text-[24px] font-extrabold">papayataha.</h1>
            </div>
            <div className="navList flex gap-x-12 ml-auto">
                <a className="underline underline-offset-4">Home</a>
                <a>Contact</a>
                <a>About</a>
                <a>Sign Up</a>
            </div>
            <div className="searchBar flex items-center ml-auto relative">
                <input 
                    type="text" 
                    placeholder="What are you looking for?" 
                    className="bg-slate-200 text-lg px-4 py-2 w-[280px] placeholder:text-slate-500 rounded"
                    style={{ fontSize: '18px' }}
                />
                <FontAwesomeIcon 
                    icon={faSearch} 
                    className="absolute right-2"
                />
            </div>
            <div className="rightSide ml-24 flex gap-x-4">
                <FontAwesomeIcon icon={faHeart} className="w-8 h-8"/>
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
        </header>
    );
}
