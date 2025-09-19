import React from 'react'
import MovieCard from './MovieCard';

function Card1({lola}) {
  return (
   <>
   {lola.map((item, index) => (
      <MovieCard key={item.id} item={item} />
   ))}
   </>
  )
}
//bg-gradient-to-t from-black/70 via-black/30 to-transparent
export default Card1
// tailwindcss -i ./src/input.css -o ./dist/output.css --watch
