import React from "react";
import PizzaCard from "./PizzaCard";
import data from "../data";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {data.map((pizza) => (
          <PizzaCard key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </main>
  );
};

export default Menu;
