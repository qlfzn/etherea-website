import { Link } from "react-router-dom"

function Hero() {
    return (
    <section id='hero' className='flex flex-col min-h-screen justify-center items-center'>
      <p className="mb-5 text-gray-400">
        FRAGRANCES
      </p>
      <h1
        id='header'
        className='text-2xl'
      >
        Etherea
      </h1>
      <p id='brand-description' className='mb-2 text-gray-500'>
        Fragrances for everyone.
      </p>
      <Link to="/order" className='mt-4 rounded bg-amber-800 px-9 py-3 text-white'>
        Order
      </Link>
    </section>
    )
}

export default Hero