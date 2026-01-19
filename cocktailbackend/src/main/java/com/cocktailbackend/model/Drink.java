package com.cocktailapp.model;
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
    // hardcoding field handling
    private String idDrink;
    private String strDrink;
    private String strInstructions;
    private String strDrinkThumb;

    private String strIngredient1;
    private String strIngredient2;
    private String strIngredient3;
    private String strIngredient4;
    private String strIngredient5;
    private String strIngredient6;

    private String strMeasure1;
    private String strMeasure2;
    private String strMeasure3;
    private String strMeasure4;
    private String strMeasure5;
    private String strMeasure6;

    public Drink(){}

    public String getIdDrink() { 
        return idDrink; 
    }

    public void setIdDrink(String idDrink) { 
        this.idDrink = idDrink; 
    }

    public String getStrDrink() { 
        return strDrink; 
    }
    public void setStrDrink(String strDrink) { 
        this.strDrink = strDrink; 
    }
    
    public String getStrInstructions() { 
        return strInstructions; 
    }

    public void setStrInstructions(String strInstructions) { 
        this.strInstructions = strInstructions; 
    }
    
    public String getStrDrinkThumb() { 
        return strDrinkThumb; 
    }
    
    public void setStrDrinkThumb(String strDrinkThumb) { 
        this.strDrinkThumb = strDrinkThumb; 
    }

    public String getStrIngredient1() { 
        return strIngredient1; 
    }

    public void setStrIngredient1(String strIngredient1) { 
        this.strIngredient1 = strIngredient1; 
    }
    
    public String getStrIngredient2() { 
        return strIngredient2; 
    }

    public void setStrIngredient2(String strIngredient2) { 
        this.strIngredient2 = strIngredient2; 
    }
    
    public String getStrIngredient3() { 
        return strIngredient3; 
    }

    public void setStrIngredient3(String strIngredient3) { 
        this.strIngredient3 = strIngredient3; 
    }
    
    public String getStrIngredient4() { 
        return strIngredient4; 
    }

    public void setStrIngredient4(String strIngredient4) { 
        this.strIngredient4 = strIngredient4; 
    }
    
    public String getStrIngredient5() { 
        return strIngredient5; 
    }

    public void setStrIngredient5(String strIngredient5) { 
        this.strIngredient5 = strIngredient5; 
    }
    
    public String getStrIngredient6() { 
        return strIngredient6; 
    }

    public void setStrIngredient6(String strIngredient6) { 
        this.strIngredient6 = strIngredient6; 
    }
    
    public String getStrMeasure1() { 
        return strMeasure1; 
    }

    public void setStrMeasure1(String strMeasure1) { 
        this.strMeasure1 = strMeasure1; 
    }
    
    public String getStrMeasure2() { 
        return strMeasure2; 
    }

    public void setStrMeasure2(String strMeasure2) { 
        this.strMeasure2 = strMeasure2; 
    }
    
    public String getStrMeasure3() { 
        return strMeasure3; 
    }

    public void setStrMeasure3(String strMeasure3) { 
        this.strMeasure3 = strMeasure3; 
    }
    
    public String getStrMeasure4() { 
        return strMeasure4; 
    }

    public void setStrMeasure4(String strMeasure4) { 
        this.strMeasure4 = strMeasure4; 
    }
    
    public String getStrMeasure5() { 
        return strMeasure5; 
    }

    public void setStrMeasure5(String strMeasure5) { 
        this.strMeasure5 = strMeasure5; 
    }
    
    public String getStrMeasure6() { 
        return strMeasure6; 
    }

    public void setStrMeasure6(String strMeasure6) { 
        this.strMeasure6 = strMeasure6; 
    }
}