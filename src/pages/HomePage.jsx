import { Link } from "react-router-dom"

function Hero() {
    return (
    <main id="hero" className="flex min-h-dvh flex-col items-center justify-center bg-[#eee4cf] px-5 py-10 text-center text-[#2d241b]">
      <div className="mb-10 flex h-28 w-24 items-center justify-center rounded-t-full border-2 border-b-2 border-[#d8af72] bg-[#f3e9d5] shadow-[0_0_50px_rgba(187,145,75,0.12)] sm:mb-16 sm:h-40 sm:w-32">
        <span className="font-serif text-6xl text-[#986c2d] sm:text-7xl">E</span>
      </div>

      <p className="mb-4 text-xs font-medium tracking-[0.45em] text-[#986c2d] sm:mb-6 sm:text-sm sm:tracking-[0.55em]">
        FRAGRANCE
      </p>
      <h1 id="header" className="font-serif text-6xl leading-none sm:text-8xl">
        Etherea
      </h1>
      <p id="brand-description" className="mt-6 max-w-xl text-lg leading-relaxed text-[#6d5b43] sm:mt-10 sm:text-2xl">
        A boutique parfum house crafting simple and elegant fragrances.
      </p>
      <Link
        to="/order"
        className="mt-10 rounded-lg bg-[#efc978] px-10 py-3 text-xl text-[#2d241b] transition-colors hover:bg-[#e5b95d] sm:mt-16 sm:px-12 sm:py-4 sm:text-2xl"
      >
        Order
      </Link>
    </main>
    )
}

export default Hero