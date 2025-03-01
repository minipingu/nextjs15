//we focus this for fetch data part
import { getProduct } from '@/app/prismadb-crud'
import EditProductForm from './product-edit-form'
import { Product } from '../page'
import { notFound } from 'next/navigation'

export default async function EditProductPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params

	const product: Product | null = await getProduct(parseInt(id))

	if (!product) {
		notFound()
	}

	return <EditProductForm product={product} />
}
