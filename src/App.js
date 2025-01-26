// import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Welcome to Pizza Zone! </h1>;
    </header>
  );
}
function Menu() {
  return (
    <menu className="menu">
      <h2>OurMenu</h2>
      <ul>
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
          name="Salamino"
          ingredients="Bread with italian olive oil and rosemary"
          price={12}
          photoImage="pizzas/salamino.jpg"
        />
        <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={10}
          photoImage="pizzas/focaccia.jpg"
        /> */}
    </menu>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>

        <span>price : {props.pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currenthour = new Date();
  const hour = currenthour.getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(hour);
  return (
    // <>
    <footer className="footer">
      {isOpen ? (
        // <h2> We are Open till {closeHour}:00</h2>
        <Order closeHour={closeHour} />
      ) : (
        <h2>
          We are Closed! Our working ours are from {openHour} to {closeHour}
        </h2>
      )}
    </footer>
    // </>
  );
}

function Order({ closeHour }) {
  return (
    <order className="order">
      <h2> We are Open till {closeHour}.00 </h2>
      <button className="btn">Order Now</button>
    </order>
  );
}

export default App;
