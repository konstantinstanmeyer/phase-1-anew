package com.cocktailapp.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

// base response per-drink
// idDrink: "15346"
// ingredients: (4) ['1 shot Dark rum', '2 shots Light rum', '1 shot Vodka', '1 shot Orange juice']
// strDrink: "155 Belmont"
// strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/yqvvqs1475667388.jpg"
// strIngredient1: "Dark rum"
// strIngredient2: "Light rum"
// strIngredient3: "Vodka"
// strIngredient4: "Orange juice"
// strIngredient5: null
// strIngredient6: null
// strInstructions: "Blend with ice. Serve in a wine glass. Garnish with carrot."
// strMeasure1: "1 shot "
// strMeasure2: "2 shots "
// strMeasure3: "1 shot "
// strMeasure4: "1 shot "
// strMeasure5: null
// strMeasure6: null

public class Drink {

    @JsonProperty("strDrink")
    private String name;

    @JsonProperty("strDrink")
    private String name;
    
    @JsonProperty("strInstructions")
    private String instructions;
    
    @JsonProperty("strDrinkThumb")
    private String imageUrl;
    
    @JsonProperty("strIngredient1")
    private String ingredient1;
    @JsonProperty("strIngredient2")
    private String ingredient2;
    @JsonProperty("strIngredient3")
    private String ingredient3;
    @JsonProperty("strIngredient4")
    private String ingredient4;
    @JsonProperty("strIngredient5")
    private String ingredient5;
    @JsonProperty("strIngredient6")
    private String ingredient6;

    @JsonProperty("strMeasure1")
    private String measure1;
    @JsonProperty("strMeasure2")
    private String measure2;
    @JsonProperty("strMeasure3")
    private String measure3;
    @JsonProperty("strMeasure4")
    private String measure4;
    @JsonProperty("strMeasure5")
    private String measure5;
    @JsonProperty("strMeasure6")
    private String measure6;

    // empty initial object
    public Drink (){

    }
}