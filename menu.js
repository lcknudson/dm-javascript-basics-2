///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: `Meat Lover`,
    price: 19.99,
    category: `entree`,
    popularity: 2,
    rating: 1,
    tags: ['No-Olives', 'Extra-Pineapple', 'cut into squares'],
}

//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE

console.log(pizza.popularity)

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE

console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE

const { name, price, category, popularity, rating, tags} = pizza 

// console.log(`${price}`)
console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
 console.log(category)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE


const foodArr = [
    {
    name: `Pinapple Pizza`,
    price: 21.23,
    category: `Specialty`,
    popularity: 7,
    rating: 6,
    tags: ['Pineapple is live', 'Extra-Pineapple', 'Bikini Bottoms'],
},
{
    name: `Vegan Pizza`,
    price: 24.96,
    category: `Vegan`,
    popularity: 6,
    rating: 5,
    tags: ['Capital V', 'Spinach', 'no squares here'],
},
{
    name: `Only Olives Pizza`,
    price: 25.52,
    category: `People by the Grand Canyon like this`,
    popularity: 5,
    rating: 4,
    tags: ['Yes-Olives', 'Did you say olives', 'open another can of olives', 'favorite'],
},
{
    name: `Cheese Pizza`,
    price: 26.97,
    category: `Mostly for Kids`,
    popularity: 4,
    rating: 3,
    tags: ["kids don't eat pizza", 'Mozerlla', 'Add some Swiss too'],
},
{
    name: `Mystery Van Pizza`,
    price: 27.74,
    category: `Scooby Pizza`,
    popularity: 3,
    rating: 2,
    tags: ['Are these scooby snacks', 'No, Shaggy, save some', 'We got a speeding ticket', 'favorite'],
}
]

// console.log(foodArr)

//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

// const filteredFood = foodArr.filter(/* CALLBACK HERE */)

//I'm fairly certain this wasn't the method intended in the instructions
//However, it returned the items with "favorite, and it works." It's admittedly a little over my skis
const filteredFood = (foodArr = [], query = '') => {
    const reg = new RegExp(query, 'i');
    return foodArr.filter((item) =>{
        let flag = false;
        for(prop in item) {
            if(reg.test(item[prop])){
                flag = true;
            }
        };
        return flag;
    });
};

// console.log(filteredFood(foodArr,'favorite'))


//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type is `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE

/* function filterByProperty (three aruments: 
property: String rating popularity, or price
number: compare against number
type: shoudl be above or below 

use filter method on foodArr:
in Callback:
- is type above (if yes, return items)
- if typs is below, return items below 




*/



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE