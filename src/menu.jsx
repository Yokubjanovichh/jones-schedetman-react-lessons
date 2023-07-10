import React, { Component } from "react";

const pizzaData = [
  {
    id: 1,
    name: "Margherita",
    description: "Classic margherita pizza with tomato, mozzarella, and basil.",
    price: 9.99,
    image: "https://www.freepik.com/free-photos-vectors/pizza ",
  },
  {
    id: 2,
    name: "Pepperoni",
    description: "Delicious pepperoni pizza with tomato sauce and melted cheese.",
    price: 11.99,
    image: "https://example.com/pepperoni.jpg",
  },
  {
    id: 3,
    name: "Vegetarian",
    description: "A delightful vegetarian pizza with assorted vegetables and cheese.",
    price: 8.49,
    image: "https://example.com/vegetarian.jpg",
  },
  {
    id: 4,
    name: "Mushroom",
    description: "Savor the earthy flavors of mushrooms with this tasty pizza.",
    price: 7.99,
    image: "https://example.com/mushroom.jpg",
  },
  {
    id: 5,
    name: "Hawaiian",
    description: "A tropical twist on pizza with ham, pineapple, and a hint of sweetness.",
    price: 9.49,
    image: "https://example.com/hawaiian.jpg",
  },
  {
    id: 6,
    name: "BBQ Chicken",
    description: "Satisfy your cravings with this BBQ chicken pizza topped with tangy sauce.",
    price: 10.99,
    image: "https://example.com/bbq_chicken.jpg",
  },
  {
    id: 7,
    name: "Supreme",
    description: "An ultimate combination of various toppings, perfect for pizza lovers.",
    price: 12.99,
    image: "https://example.com/supreme.jpg",
  },
  {
    id: 8,
    name: "Cheese Lovers",
    description: "Indulge in a cheesy delight with a variety of cheeses on a pizza crust.",
    price: 9.99,
    image: "https://example.com/cheese_lovers.jpg",
  },
  {
    id: 9,
    name: "Meat Feast",
    description: "A meat lover's dream with a generous assortment of meats and toppings.",
    price: 11.49,
    image: "https://example.com/meat_feast.jpg",
  },
  {
    id: 10,
    name: "Vegan",
    description: "A plant-based pizza packed with delicious vegan ingredients.",
    price: 10.99,
    image: "https://example.com/vegan.jpg",
  },
  // Add more pizza objects as needed
];

export default class Menu extends Component {
  render() {
    return (
      <div>
        <main className="menu">Our menu</main>
        <div>
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.id} url={pizza.image} name={pizza.name} desc={pizza.description} price={pizza.price} />
          ))}
        </div>
      </div>
    );
  }
}

class Pizza extends React.Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <img src={this.props.url} alt="img" />
        <div style={{ display: "flex", flexDirection: "comlumn", gap: "10px" }}>
          <h3>{this.props.name}</h3>
          <h4>{this.props.desc}</h4>
          <p>{this.props.price}</p>
        </div>
      </div>
    );
  }
}
