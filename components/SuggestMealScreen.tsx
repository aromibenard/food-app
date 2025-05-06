import { Food, foods } from "@/data/food";
import { useRef, useState } from "react";
import { Animated, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";

function getRandomFoodByCategory(category: string): Food | null {
    const filtered = foods.filter((food) => food.categories.includes(category))
    if (filtered.length === 0) return null
    const randomIndex = Math.floor(Math.random() * filtered.length)
    
    return filtered[randomIndex]
}

const MealSuggestionScreen = () => {
    const [mainDish, setMainDish] = useState<Food | null>(null)
    const [sideDish, setSideDish] = useState<Food | null>(null)
    
    const animation = useRef(new Animated.Value(0)).current

    const suggestMeal = () => {
        const newMain = getRandomFoodByCategory("Main")
        const newSide = getRandomFoodByCategory("Side")

        setMainDish(newMain)
        setSideDish(newSide)
        

        // animate
        animation.setValue(0)
        Animated.timing(animation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    // animation styles
    const animatedStyle = {
        opacity: animation,
        transform: [
            {
                scale: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0.8, 1],
                }),
            },
        ],
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Meal Suggestion</Text>
            {mainDish && (
                <Animated.View style={[styles.foodContainer, animatedStyle]}>
                    <Text style={styles.foodLabel}>Main Dish</Text>
                    <Image source={mainDish.image} style={styles.foodImage} />
                    <Text style={styles.foodName}>{mainDish.name}</Text>
                </Animated.View>
            )}
            {sideDish && (
                <Animated.View style={[styles.foodContainer, animatedStyle]}>
                    <Text style={styles.foodLabel}>Side Dish</Text>
                    <Image source={sideDish.image} style={styles.foodImage} />
                    <Text style={styles.foodName}>{sideDish.name}</Text>
                </Animated.View>
            )}

            <View style={styles.buttonContainer}>
                <Button title="Suggest Meal" onPress={suggestMeal} />
            </View>
        </ScrollView>
    )
}

export default MealSuggestionScreen

const styles = StyleSheet.create({
        container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    foodContainer: {
        alignItems: "center",
        marginBottom: 30,
    },
    foodLabel: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 10,
    },
    foodImage: {
        width: 200,
        height: 200,
        borderRadius: 12,
        marginBottom: 10,
    },
    foodName: {
        fontSize: 20,
        fontWeight: "500",
    },
    buttonContainer: {
        marginTop: 20,
        width: "100%",
    },
});