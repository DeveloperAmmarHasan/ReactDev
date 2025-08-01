import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
const [length,setlength] = useState(8);
const [numberAllowed,setNumberAllowed] = useState(false);
const [charAllowed,setCharAllowed] = useState(false);
const [password,setPassword] = useState("");
//useref
const passwordRef = useRef(null);
const passwordGenerator = useCallback(()=>{
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*-_[]{}~`"
  for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
},[length,numberAllowed,charAllowed,setPassword]);

const copyPasswordToclipboard = useCallback(()=>{
  passwordRef.current?.select() 
  window.navigator.clipboard.writeText(password)
},[password])
useEffect(()=>{
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])
return (
  <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 pb-6'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden my-3'>
        <input 
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3 bg-white'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3  py-0.5 shrink-0' onClick={copyPasswordToclipboard}>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={100} value={length} className='cursor-pointer' onChange={(e)=>setlength(e.target.value)} />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=>setNumberAllowed((prev)=>!prev) } />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=>setCharAllowed((prev)=>!prev) } />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
      </div>    
    </>
  )
}

export default App
