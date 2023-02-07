import ky from "ky";

export async function getAllProduct() {
    try {
        const products = await ky
        .get('https://fakestoreapi.com/products')
        .json();
        console.log(products)
    } catch (e) {
        console.log(e)
    }
    
}