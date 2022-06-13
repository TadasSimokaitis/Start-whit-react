import logo from './logo.png';

export default function nav(){
    return(
        <div className='main-nav'>
        <div className="header">
        <img src={logo}></img>
      </div>

      <div className="nav">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">company</a>
        <a href="#">Contact</a>
      </div>

      </div>
    )
}