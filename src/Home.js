import React from 'react';
import "./App.css";
import { Link} from 'react-router-dom';
import Pizza from './Pizza.jpg';




const Home = () => {
  return (

    
    
<div className="home-pizza"> 

<div> 
<h1 >Pizza Station</h1>

</div>
<div>
  <div> <img id='homepizzafoto' src={Pizza}/> </div>

</div>
<Link to="/pizza" id='siparisegecbuttonu' className='siparisbutton'>Sipariş Ver!</Link>   
</div>
  
);
};
  
  export default Home;
  