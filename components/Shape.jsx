import React from 'react'

const Shape = () => {
  return (
    <>
      {/* Background shapes */}
      {/* Haut gauche */}
      <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full opacity-20 animate-pulse-slow sm:w-[400px] sm:h-[400px]" />

      {/* Bas droite */}
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full opacity-20 animate-pulse-slow sm:w-[500px] sm:h-[500px]" />

      {/* Haut droite */}
      <div className="absolute -top-28 -right-28 w-[250px] h-[250px] bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse-slow sm:w-[350px] sm:h-[350px]" />

      {/* Bas gauche */}
      <div className="absolute -bottom-28 -left-28 w-[280px] h-[280px] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse-slow sm:w-[400px] sm:h-[400px]" />

      {/* Centre gauche */}
      <div className=" block sm:hidden absolute top-1/2 -translate-y-1/2 -left-40 w-[220px] h-[220px] bg-gradient-to-r from-teal-400 to-lime-500 rounded-full opacity-20 animate-pulse-slow sm:w-[300px] sm:h-[300px]" />

      {/* Centre droite */}
      <div className="block sm:hidden absolute top-1/2 -translate-y-1/2 -right-40 w-[220px] h-[220px] bg-gradient-to-r from-rose-400 to-fuchsia-500 rounded-full opacity-20 animate-pulse-slow sm:w-[300px] sm:h-[300px]" />
    </>
  )
}

export default Shape
