package com.cocktailbackend.model;

import java.util.List;

public class DrinkResponse {
    // using list for binding structure/content
    private List<Drink> drinks;


    public DrinkResponse () {}

    public List<Drink> getDrinks() { 
        return drinks; 
    }

    public void setDrinks(List<Drink> drinks) { 
        this.drinks = drinks;
    }
}