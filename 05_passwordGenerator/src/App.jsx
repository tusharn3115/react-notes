import { useCallback, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")


  // random password generator function
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%&*+-"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllow, charAllow, setPassword])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label className='text-base'>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            className='ml-2'
            type="checkbox"
            defaultChecked={numAllow}
            id='numberInput'
            onChange={(prev) => {
              setNumAllow((prev) => !prev)
            }}
          />
          <label className='text-base'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            className='ml-1'
            type="checkbox"
            defaultChecked={charAllow}
            id='characterInput'
            onChange={(prev) => {
              setCharAllow((prev) => !prev)
            }}
          />
          <label className='text-base'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
