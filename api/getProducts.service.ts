export const getProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};
export const getProductsByCategory = async (category: string) => {
    try {
        const response = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
        );
        const res = await response.json();
        return res;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};
