'use client'
import Image from 'next/image'

export default function Gallery(){
  return (
    <section className="container py-12">
      <div className="space-y-24">
        {/* Example block: leaderboard */}
        <div className="bg-white/60 rounded-xl p-6 shadow">
          <h3 className="font-bold text-xl">Bảng xếp hạng</h3>
          <div className="mt-4">
            <Image src="/assets/leaderboard.webp" width={1000} height={300} alt="leaderboard" />
          </div>
        </div>

        {/* Example block: trailer */}
        <div className="bg-white/60 rounded-xl p-6 shadow">
          <h3 className="font-bold text-xl">Trailer / Đoạn giới thiệu</h3>
          <div className="mt-4">
            <Image src="/assets/trailer-thumb.webp" width={800} height={450} alt="trailer" />
          </div>
        </div>

        {/* Example block: special events */}
        <div className="bg-white/60 rounded-xl p-6 shadow">
          <h3 className="font-bold text-xl">Tính năng nổi bật</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <Image src="/assets/feature1.webp" width={600} height={350} alt="f1" />
            <Image src="/assets/feature2.webp" width={600} height={350} alt="f2" />
          </div>
        </div>
      </div>
    </section>
  )
}