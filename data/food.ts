export type Food = {
    id: number;
    name: string;
    image: any;
    categories: string[];
};

export const foods: Food[] = [
    {
        id: 1,
        name: "Chapo",
        image: require("../assets/images/chapo.jpg"),
        categories: ["Main" , "Dinner", "Breakfast", "Lunch"],
    },
    {
        id: 2,
        name: "Beef Stew",
        image: require("../assets/images/beef-stew.jpg"),
        categories: ["Side", "Lunch", "Dinner"],
    },
    {
        id: 3,
        name: "Beans Stew",
        image: require("../assets/images/beans-stew.jpg"),
        categories: ["Side", "Lunch", "Dinner"],
    },
    {
        id: 4,
        name: "Fried Veggies",
        image: require("../assets/images/fried-veggies.jpg"),
        categories: ["Side", "Lunch", "Dinner"],
    },
    {
        id: 5,
        name: "Nyama Choma",
        image: require("../assets/images/nyama-choma.jpg"),
        categories: ["Healthy", "Vegetarian"],

    },
    {
        id: 6,
        name: "Rice",
        image: require("../assets/images/rice.jpg"),
        categories: ["Main", "Lunch", "Dinner"],
    }
]
