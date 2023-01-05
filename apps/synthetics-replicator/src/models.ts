export enum ItemCategory {
    SNACKS = 'Snacks',
    SOUPS = 'Soups & Stews',
    ENTREES = 'Entrees',
    DESSERTS = 'Cakes & Desserts',
    SOFT_DRINKS = 'Soft Drinks',
    HOT_DRINKS = 'Hot Drinks',
    ALCOHOLIC_BEVERAGES = 'Alcoholic Beverages'
} 

export type Allergens = 'Celery' | 'Gluten' | 'Crustaceans' | 'Eggs' | 'Fish' | 'Milk' | 'Molluscs' | 'Nuts' | 'Peanuts';

export type MenuItem = {
    name: string;
    price: number;
    category: ItemCategory;
    allergens?: Allergens[];
    vegan: boolean;
    vegetarian: boolean;
    spicy: boolean;
    imagePath?: string;
}

export const allergenIconMapping = { 
    'Celery': 'simple-icons:celery',
    'Gluten': 'mdi:gluten', 
    'Crustaceans': 'fluent-emoji-high-contrast:lobster', 
    'Eggs': 'tabler:eggs', 
    'Fish': 'tabler:fish', 
    'Milk': 'tabler:milk', 
    'Molluscs': 'game-icons:mussel', 
    'Nuts': 'lucide:nut', 
    'Peanuts': 'fluent-emoji-high-contrast:peanuts' 
};

export const menuItems: MenuItem[] = [
    {
        name: 'Shimmerwine',
        price: 4.99,
        category: ItemCategory.ALCOHOLIC_BEVERAGES,
        vegan: true,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Mudder\'s Milk',
        price: 5.99,
        category: ItemCategory.ALCOHOLIC_BEVERAGES,
        allergens: ['Milk', 'Peanuts', 'Nuts', 'Gluten'],
        vegan: false,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Bloodwine',
        price: 7.99,
        category: ItemCategory.ALCOHOLIC_BEVERAGES,
        vegan: true,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Samarian Sunset',
        price: 5.99,
        category: ItemCategory.ALCOHOLIC_BEVERAGES,
        vegan: true,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Romulan Ale',
        price: 8.99,
        category: ItemCategory.ALCOHOLIC_BEVERAGES,
        vegan: true,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Pan Galactic Gargle Blaster',
        price: 3.99,
        category: ItemCategory.ALCOHOLIC_BEVERAGES,
        vegan: true,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Blue Milk',
        price: 1.99,
        category: ItemCategory.SOFT_DRINKS,
        allergens: ['Milk'],
        vegan: false,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Slurm',
        price: 2.49,
        category: ItemCategory.SOFT_DRINKS,
        vegan: true,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Raktajino',
        price: 0.99,
        category: ItemCategory.HOT_DRINKS,
        allergens: ['Milk'],
        vegan: false,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Spoo',
        price: 2.99,
        category: ItemCategory.SNACKS,
        allergens: ['Milk'],
        vegan: false,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Fish Fingers & Custard',
        price: 3.99,
        category: ItemCategory.SNACKS,
        vegan: false,
        vegetarian: false,
        spicy: false
    },
    {
        name: 'Popplers',
        price: 1.99,
        category: ItemCategory.SNACKS,
        vegan: false,
        vegetarian: false,
        spicy: false
    },
    {
        name: 'Soylent Green',
        price: 2.99,
        category: ItemCategory.SNACKS,
        allergens: ['Milk', 'Eggs', 'Crustaceans'],
        vegan: false,
        vegetarian: false,
        spicy: false
    },
    {
        name: 'Fruity Oaty Bars',
        price: 0.49,
        category: ItemCategory.SNACKS,
        allergens: ['Eggs', 'Milk', 'Nuts'],
        vegan: false,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Peanut Cheese Bars',
        price: 0.99,
        category: ItemCategory.SNACKS,
        allergens: ['Peanuts', 'Milk'],
        vegan: false,
        vegetarian: true,
        spicy: false
    },
    {
        name: 'Plomeek Soup',
        price: 2.99,
        category: ItemCategory.SOUPS,
        vegan: true,
        vegetarian: true,
        spicy: false 
    },
    {
        name: 'Dragonbreath Chili',
        price: 3.99,
        category: ItemCategory.SOUPS,
        vegan: false,
        vegetarian: false,
        spicy: true 
    },
    {
        name: 'Shawarma',
        price: 6.99,
        category: ItemCategory.ENTREES,
        allergens: ['Milk'],
        vegan: false,
        vegetarian: false,
        spicy: true 
    },
    {
        name: 'Hasperat',
        price: 7.99,
        category: ItemCategory.ENTREES,
        allergens: ['Milk'],
        vegan: false,
        vegetarian: true,
        spicy: true 
    },
    {
        name: 'Gagh',
        price: 6.99,
        category: ItemCategory.ENTREES,
        vegan: true,
        vegetarian: true,
        spicy: false 
    },
    {
        name: 'Delicious Moist Cake',
        price: 10.99,
        category: ItemCategory.DESSERTS,
        allergens: ['Milk', 'Eggs', 'Gluten'],
        vegan: false,
        vegetarian: true,
        spicy: false 
    },
    {
        name: 'Creme-filled Cakes',
        price: 3.99,
        category: ItemCategory.DESSERTS,
        allergens: ['Milk', 'Eggs', 'Gluten'],
        vegan: false,
        vegetarian: true,
        spicy: false 
    },
    {
        name: 'Cellular Peptide Cake with Mint Frosting',
        price: 5.99,
        category: ItemCategory.DESSERTS,
        allergens: ['Milk', 'Eggs'],
        vegan: false,
        vegetarian: true,
        spicy: false 
    },
];

export function addImagePathToItem(item: MenuItem): MenuItem {
    let imageNo = 1;
    const basePath = 'food-images/';
    switch (item.category) {
        case ItemCategory.ALCOHOLIC_BEVERAGES:
            imageNo = generateRandomImagePostfix(4, 1);
            item.imagePath = `${basePath}drink${imageNo}.avif`;
            break;
        case ItemCategory.SOFT_DRINKS:
            imageNo = generateRandomImagePostfix(4, 3);
            item.imagePath = `${basePath}drink${imageNo}.avif`;
            break;
        case ItemCategory.HOT_DRINKS:
            item.imagePath = `${basePath}coffee.avif`;
            break;
        case ItemCategory.ENTREES:
            imageNo = generateRandomImagePostfix(3, 1);
            item.imagePath = `${basePath}main${imageNo}.avif`;
            break;
        case ItemCategory.SOUPS:
            item.imagePath = `${basePath}soup.avif`;
            break;
        case ItemCategory.SNACKS:
            imageNo = generateRandomImagePostfix(3, 1);
            item.imagePath = `${basePath}snacks${imageNo}.avif`;
            break;
        case ItemCategory.DESSERTS:
            imageNo = generateRandomImagePostfix(2, 1);
            item.imagePath = `${basePath}dessert${imageNo}.avif`
            break;
    }

    return item;
}

export function generateRandomImagePostfix(max: number, min: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}