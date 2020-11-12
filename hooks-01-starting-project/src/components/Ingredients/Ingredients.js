import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import env from "../../config.json";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  useEffect(() => {
    fetch(env.firebaseURI)
      .then((res) => res.json())
      .then((resData) => {
        const loadedIngredients = [];
        for (const key in resData) {
          loadedIngredients.push({
            id: key,
            title: resData[key].title,
            amount: resData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
   }, []);

  useEffect(() => {
    console.log("Rendering ingredients", userIngredients);
  }, [userIngredients]);

  const filteredIngredientHandler = filteredIng => {
    setUserIngredients(filteredIng)
  }

  const addIngredientHandler = (ingredient) => {
    fetch(env.firebaseURI, {
      method: "POST",
      body: JSON.stringify(ingredient),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientHandler = (id) => {
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((x) => x.id != id)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search onLoadIngredients={filteredIngredientHandler}/>
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;
