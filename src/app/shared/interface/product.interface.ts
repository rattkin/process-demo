export interface Product {
    id: string;
    name?: string;
    weight?: number;
    category?: "class1" |
    "class2" |
    "class3";
    photo?: string;
}


export const Category = new Map([
    ["class1", "Products class 1"],
    ["class2", "Products class 2"],
    ["class3", "Products class 3"],
])