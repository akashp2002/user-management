import React,{useState} from 'react'
import './home.css'
import shirt from '../../Assets/shirt1.jpg'
import shoes1 from '../../Assets/shoes1.jpg'
import shoes2 from '../../Assets/shoes2.jpg'
import tshirt from '../../Assets/tshirt.jpg'
import tshirt2 from '../../Assets/tshirt2.jpg'
function Home() {  
 const [data] = useState([
  {
    image:shirt,
    name:"SulPhur Shir",
    Rate:"700"
  },
  {
    image:shoes2,
    name:" Shoes",
    Rate:"1000"
  }, {
    image:tshirt,
    name:"SulPhur Shir",
    Rate:"700"
  }, {
    image:tshirt2,
    name:"SulPhur Shir",
    Rate:"700"
  }, {
    image:shoes2,
    name:"SulPhur Shir",
    Rate:"700"
  }, {
    image:tshirt2,
    name:"SulPhur Shir",
    Rate:"700"
  }, {
    image:shirt,
    name:"SulPhur Shir",
    Rate:"700"
  }, {
    image:shoes1,
    name:"SulPhur Shir",
    Rate:"700"
  },
 ])

  return (
    <div className='home_container'>
      <div className='cards'>
        {
          data.map((items)=>(
            <div className='card'>
            <img src={items.image} className='card_img' alt='img'/>
            <h3 className='card_header'>{items.name}</h3>
            <h4 className='rate'>Rs {items.Rate}</h4>
            <div className='button_container'>
            <button className='card_button'>Book Now</button>
            <button className='card_button'>Add to Cart</button>
            </div>
          </div>
          ))
        }
       
      </div>
    </div>
  )
}

export default Home