import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card2 from '../utils/Card2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
const Testimonials = () => {
    const [user, setUser] = useState({})
    useEffect(()=>{
        const fetchData = async()=> {
            try {
                const {data} = await axios.get("https://randomuser.me/api/?results=4");
                console.log(data)
                const result = data.results
                setUser(result)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    },[])

  return (
    <section id="testimonials">
        <h3 className="testimonials-text">Testimonials</h3>
        <div className="testimony">
        {Object.keys(user).map((key, index)=>{
            return(
                <Card2
            key={key}
            rating = {<FontAwesomeIcon icon={faStar} style={{color: "#F4CE14", fontSize: "18px"}}/>}
            image={user[key].picture.thumbnail}
            alt={[user[key].name.title, user[key].name.first, user[key].name.last]}
            name={[user[key].name.first, " ", user[key].name.last]}
            reviewTitle ={
                index === 0? "Exquisite Culinary Delights" : index === 1? "Warm Atmosphere, Exceptional Cuisine" : index ===2? "Culinary Journey to Remember" : index ===3? "Hidden Gem of Mediterranean Cuisine": "Hidden Gem of Mediterranean Cuisine"
            }
            reviews ={
                index === 0? "Loved the dining experience! Authentic flavors, exquisite presentation. Will be back!" : index === 1? "Delicious food, impeccable service! Warm ambiance, perfect for any occasion." : index ===2? "Delightful culinary journey! Warm hospitality, bursting flavors. Can't wait to return!" : index ===3? "Fantastic find! Exceeded expectations. Burst of flavors, captures essence of Mediterranean. Will spread the word!" : "Fantastic find! Exceeded expectations. Burst of flavors, captures essence of Mediterranean. Will spread the word!"
            }
            />
            )
        })}
        </div>
    </section>
  )
}

export default Testimonials