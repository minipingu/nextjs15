import { getProducts } from '../prismadb-crud'

import ProductDetail from './product-detail'

//same as model in prisma schema
export type Product = {
	id: number
	title: string
	price: number
	description: string | null
}

export default async function ProductsDBPage() {
	const products: Product[] = await getProducts()

	return <ProductDetail products={products} />
}
