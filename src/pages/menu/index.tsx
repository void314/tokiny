import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs'
import NavMenu from '@/components/nav-menu/nav-menu'
import Card from '@/components/product-card/product-card'
import { Inter } from '@next/font/google'

import { productAPI } from '@/services/ProductService'
import { IProduct } from '@/models/IProduct'
import ShoppingCart from '@/components/shoping-cart/shoping-cart'

const inter = Inter({
  subsets: ['cyrillic'],
  weight: '400',
})

export default function Memu() {
  const { data: products, isLoading, error } = productAPI.useFetchProductsQuery(20);
  const [createProduct, {}] = productAPI.useCreateProductMutation();
  const [updateProduct, {}] = productAPI.useUpdateProductMutation();
  const [deleteProduct, {}] = productAPI.useDeleteProductMutation();


  const handelCreate = async () => {
    const test: IProduct = {
      "id": 8,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }
    await createProduct(test);
  }

  const handelUpdate = async () => {
    const test: IProduct = {
      "id": 7,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 10000,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "hhhhh",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }
    await updateProduct(test);
  }

  const handelDelete = async () => {
    const test: IProduct = {
      "id": 7,
      "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      "price": 695,
      "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
      "category": "jewelery",
      "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }
    await deleteProduct(test);
  }

  return (
    <div className='max-w-5xl m-auto flex flex-col items-center justify-evenly'>
      <NavMenu />
      <Breadcrumbs />
      
      <button onClick={ handelCreate }>+++</button>
      <button onClick={ handelUpdate }>***</button>
      <button onClick={ handelDelete }>---</button>

      <ShoppingCart/>
      Меню
      <div className='flex flex-wrap items-center justify-between max-w-5xl'>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Loading error</h1>}
        {products && products.map(product => 
          <Card data={product} key={product.id} />
        )}
      </div>
    </div>
  )
}
