function Food() {
    const foods = ["orange", "apple","coconut"];
    const foodItems = foods.map(food => <li>{food}</li>);
    return(
        <div>
            <ul>
                {foodItems}
                
            </ul>
        </div>
    );
} 

export default Food;