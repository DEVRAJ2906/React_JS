import { useRef, useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState("7");
  const [numberIncluded, setNumberIncluded] = useState(false);
  const [characterIncluded, setCharacterIncluded] = useState(false);
  const [pwd, setPwd] = useState("");

  const pwdRef = useRef(null);

  const copyPwd = useCallback(() => {
    pwdRef.current?.select();
    window.navigator.clipboard.writeText(pwd);
  },[pwd]);

  const passwordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberIncluded){
      string += "0123456789";
    }
    if(characterIncluded){
      string += "~!@#$%^&*()_+{}";
    }

    for(let i=1; i<=length; i++){
      let index = Math.floor(Math.random() * string.length + 1);
      password += string.charAt(index);
    }

    setPwd(password);
  },[length, numberIncluded, characterIncluded, setPwd]);

  useEffect(() => {
    passwordGenerator()
  },[length, numberIncluded, characterIncluded, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 bg-gray-700'>
        <h1 className='text-center text-4xl p-5  text-gray-500'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={pwd} className='outline-none w-full py-1 px-3 bg-white' placeholder='password' readOnly/>
        <button className='outline-none bg-blue-900 text-white px-3 py-2 shrink-0 cursor-pointer' onClick={copyPwd}>copy</button>
        </div>
        <div className='flex text-sm gap-x-1  text-blue-200'>
          <div className='flex items-center gap-x-1 px-1 py-2'>          
            <input ref={pwdRef} type="range" value={length} min={5} max={15} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/><label>Length ({length})</label>
          </div>
          <div className='flex items-center gap-x-1 px-1 py-2'>        
            <input type="checkbox" defaultChecked={numberIncluded} id='numberInput' onChange={() => {setNumberIncluded((prev) => !prev)}} /><label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1 px-1 py-2'>        
            <input type="checkbox" defaultChecked={characterIncluded} id='charInput' onChange={() => {setCharacterIncluded((prev) => !prev)}}/><label htmlFor='charInput'>Special Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
