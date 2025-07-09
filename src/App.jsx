import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-8xl text-green-700 font-semibold capitalize mt-10 border-8 border-double border-green-500 pb-5 px-5 block text-center mx-auto'>simple counter app</h1>
    <div className='w-[500px] px-6 py-5 border-2 border-red-300 shadow-2xl rounded-lg mt-20 mx-auto'>
    <h2 className='text-center text-9xl'>hi</h2>
    <div></div>
    </div>
    </>
  )
}

export default App
