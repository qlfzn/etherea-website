import { Link } from "react-router-dom"

function Hero() {
    return (
    <section id='hero' className='flex flex-col min-h-screen justify-center items-center'>
      <h1
        id='header'
        className='text-2xl'
      >
        Etherea
      </h1>
      <p id='brand-description' className='text-gray-500'>
        Fragrances for everyone.
      </p>
      <Link to="/order" className='mt-4 rounded bg-amber-800 px-4 py-4 text-black'>
        Order
      </Link>
    </section>
    )
}

export default Hero