"use client"

import Image from "next/image"
import Link from "next/link"

const posts = [
  { video: "/videos/peniel-reel.mp4" },
  { image: "/imagens/1.jpeg" },
  { image: "/imagens/2.jpeg" },
  { video: "/videos/Carinho.mp4" },
  { image: "/imagens/3.jpeg" },
  { image: "/imagens/4.jpeg" },
]

export function InstagramSection() {
  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto p-4">
        {posts.map((post, i) => (
          <Link
            key={i}
            href="https://www.instagram.com/clinicaodontologicapeniel/"
            target="_blank"
            className="relative block bg-black rounded-2xl overflow-hidden"
            style={{ paddingBottom: "100%" }} // faz o quadrado
          >
            {post.video ? (
              <video
                src={post.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                // SÓ O CARINHO SOBE - mude o 20% aqui
                style={post.video.includes("Carinho") ? { objectPosition: "50% 20%" } : undefined}
              />
            ) : (
              <Image
                src={post.image!}
                alt={`post ${i}`}
                fill
                className="object-cover"
              />
            )}
          </Link>
        ))}
      </div>
    </section>
  )
}