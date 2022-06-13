import logo from './../logo.svg';
import Navigation from './Navigation';

export default function Header(){
    return(
        <header className='header'>
             <img src={logo} className='header__logo' alt='logo' />
                 <Navigation navType='primary'/>
              <div className='header__hero'>
                 Header image
             </div>
    </header>
    )
}