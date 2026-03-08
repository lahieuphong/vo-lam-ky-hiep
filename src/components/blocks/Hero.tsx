'use client'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero(){
  return (
    <section className="container py-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl font-extrabold">Nhất Chi Kinh Tâm</h2>
        <p className="mt-4 text-slate-700">Một đoạn mô tả ngắn về event/landing. Gọi hành động chính ở đây.</p>
        <div className="mt-6 flex gap-3">
          <Button>Tham gia ngay</Button>
          <Button variant="ghost">Xem Trailer</Button>
        </div>
      </div>

      <div className="relative w-full h-80">
        {/* thay /assets/hero.webp bằng ảnh export từ Figma */}
        <Image src="/assets/hero.webp" alt="hero" fill className="object-contain" />
      </div>
    </section>
  )
}