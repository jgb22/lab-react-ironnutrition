import './App.css';
import React, { useState, useEffect } from 'react';
import foods from "./foods.json";
import FoodBox from './component/FoodBox';
import { Row, Col } from 'antd';
import AddFoodForm from "./component/AddFoodForm";


function App () {
  const [foodList, setFoodList] = useState(foods)

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  const deleteFood = (index) => {
    const updatedFoodList = foodList.filter((_, i) => i !== index);
    setFoodList(updatedFoodList);
  };

  return (
    <div className="App">
      <Row gutter={16}>
      <Col span={12}>
          <AddFoodForm addFood={addFood} />
        </Col>
      </Row>
      <Row gutter={16}>
      {foodList.map((food, index) => (
          <FoodBox key={index} food={food} onDelete={() => deleteFood(index)}/>
        ))}
      </Row>
    </div>

  
  );}





export default App;