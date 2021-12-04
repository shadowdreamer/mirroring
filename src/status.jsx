import React, { useContext } from 'react';
import { dataCtx } from "./provider";

function Status() {
  const { isGaming ,setGaming,setScore,score, step ,countdown} = useContext(dataCtx)
  return (
    <div className={`transition mt-10  ${isGaming?'':'filter blur-sm'}`}>
      <div className="font-bold text-xl mr-4 mb-3">🎖score:{score}</div>
      <div className="flex mb-3 font-bold text-xl">
        <div className="mr-4 w-32">⏱: {
          isGaming==='try'?'∞':
          ((countdown/1000).toFixed(2) + 's')
        }</div>
        <div className={step<=2 ? 'text-red-400':''}>left step:{step}</div>
      </div>
      <div>
        {
         isGaming ==='try' && <button className="button bg-red-400" onClick={()=>{
            setScore(0);
            setGaming(false);
          }}>结束</button>
        }
      </div>
    </div>
  );
}

export default Status;
