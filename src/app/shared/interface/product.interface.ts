export interface Product {
    id?: string;
    name?: string;
    descriptionCZ?: string;
    descriptionEN?: string;
    allergen?: string;
    weight?: string;
    price?: number;
    priceJH?: number;
    priceTR?: number;
    photo?: string;
    clPhoto?: string;
    heat?: number;
    chosenHeat?: number;
    orderQuantity?: number;
    packaging?: number;
    sideDish?: Product;
    tags?: MealTags[];
    type?: 'meal' | 'side';
    category?: 'menu' |
    'soup' |
    'chicken' |
    'pork' |
    'starter' |
    'tandoor' |
    'lamb' |
    'pork' |
    'vege' |
    'fish' |
    'biryani' |
    'side' |
    'drink'
    ;
}

export enum MealTags {
    ChapatiOrRiceFree = 'Chapati or Rice free',
    Vegetarian = 'Vegetarian',
    New = 'New',
    ChefSpecial = 'Chef\'s Special'
}

export const Category = new Map([
    ["menu", "Menu"],
    ["soup", "Soup"],
    ["chicken", "Chicken"],
    ["pork", "Pork"],
    ["starter", "Starters"],
    ["tandoor", "Tandoori"],
    ["lamb", "Lamb"],
    ["pork", "Pork"],
    ["vege", "Vegetarian"],
    ["fish", "Fish"],
    ["biryani", "Biryani"],
    ["side", "Side dish"],
    ["drink", "Drinks"],
])