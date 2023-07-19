'use client'

import { IconButton } from '@/components/ui/icon-button'
import { useCart } from '@/hooks/use-cart'
import usePreviewModal from '@/hooks/use-preview-modal'
import { Product } from '@/types'
import { Expand, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { MouseEventHandler } from 'react'
import { Currency } from './currency'

interface ProductCard {
  data: Product
}

export const ProductCard: React.FC<ProductCard> = ({ data }) => {
  const router = useRouter()
  const previewModal = usePreviewModal()
  const cart = useCart()

  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    previewModal.onOpen(data)
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()

    cart.addItem(data)
  }

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt={data.name}
          src={data?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={24} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={24} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      <div>
        <p className="font-semibold text-lg">{data.name}</p>

        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>

      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}
