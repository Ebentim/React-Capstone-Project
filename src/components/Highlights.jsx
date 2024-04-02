import React from 'react'
import Card from '../utils/Card'
import greekSalad from '../icons_assets/greek-salad.jpg'
import bruchetta from '../icons_assets/bruchetta.jpeg'
import lemonDessert from '../icons_assets/lemon-dessert.jpg'
const cards = {
    greekSalad:{
        image: greekSalad,
        alt: "Greek Salad dish",
        title: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        cta: "Order a delivery",
        icon: ""
    },
    bruchetta:{
        image: bruchetta,
        alt: "Bruchetta dish",
        title: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        cta: "Order a delivery",
        icon: ""
    },
    lemonDessert:{
        image: lemonDessert,
        alt: "Lemon Dessert dish",
        title: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        cta: "Order a delivery",
        icon: ""

    }
}
const Highlights = () => {
  return (
    <section id='highlights'>
        <div className='highlight-title'>
        <h3>This Week Specials!</h3>
            <button>Online Menu</button>
        </div>
        <div id='specials'>
            {Object.keys(cards).map(key =>{
                return (<Card
                key={key}
                image = {cards[key].image}
                alt = {cards[key].alt}
                title = {cards[key].title}
                price = {cards[key].price}
                description = {cards[key].description}
                cta = {cards[key].cta}
                icon = {cards[key].icon}
                />)
            })}
        </div>
    </section>
  )
}

export default Highlights