import React, { useState } from 'react'



const RandomEmoji = () => {
    const [selectedEmoji, setSelectedEmoji] = useState("π€΄");

    const emoji = ["π", "π", "π", "π", "π", "π", "π", "π€£", "βΊοΈ", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π", "π€ͺ", "π€¨", "π§", "π€", "π", "π€©", "π", "π", "π", "π", "π", "π", "π", "βΉοΈ", "π£", "π", "π«", "π©", "π€", "π ", "π‘", "π€¬", "π€―", "π³", "π±", "π¨", "π°", "π’", "π₯", "π­", "π"];

    const handleChange = () => {
        var randomIndex = Math.floor(Math.random() * emoji.length);
        setSelectedEmoji(emoji[randomIndex]);
    }
  return (
    <div className="flex flex-col h-60 w-80  bg-white text-gray-800 my-24 rounded-md shadow-lg ">
<span className='text-5xl font-serif text-center px-12 py-1 m-12'>{selectedEmoji}</span>
<button onClick={handleChange} className='px-5 py-4 m-3 hover:bg-blue-700  bg-blue-500 text-white rounded-md shadow-lg text-center'>Generate</button>
    </div>
  )
}

export default RandomEmoji