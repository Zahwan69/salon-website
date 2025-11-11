import React from 'react'

const HomePage = () => {
    return(
        <div className="relative h-[60vh] md:j-[80vh] bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('salon-hero-bg')" }}>
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl md:text-8xl font-serif font-extrabold tracking-tight mb-4">WayMoreBeautiful Beauty Bar & Esthetics</h1>
                    <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
                        Elevate Your Style. Experience Luxury.
                    </p>
                    <button className="px-8 py-3 bg-pink-600 text-white text-lg 
                           font-semibold rounded-full shadow-xl 
                           hover:bg-pink-700 transition duration-300 transform 
                           hover:scale-105">
                            Book Your Appointment Today
                        </button>
            </div>
        </div>
    )
}
export default HomePage;