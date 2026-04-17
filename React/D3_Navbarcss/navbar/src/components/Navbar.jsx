import logo from './assets/1.jpg';
import banner from './assets/banner.jpg';
const Navbar = () => {

return (<>
<div id ="logo">
    <div>
<img width="100px" height="100px" src={logo} alt=""/>
    </div>
<div className="navbar">
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Services</a>
<a href="#">Contact</a>
</div>
</div>
<img width="88%" height="550" src={banner} alt=""/>


</>)


}

export default Navbar;