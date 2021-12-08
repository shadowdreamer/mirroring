import React, { useContext, useEffect, useState } from 'react';
import { dataCtx } from "./provider";
function Overlay() {
  const { score, isGaming,setGaming ,setScore,startTimer } = useContext(dataCtx)
  const [highScore,setHight] = useState(localStorage.highScore || 0);
  useEffect(()=>{
    if(score>highScore && isGaming!=='try'){
      localStorage.highScore = score;
      setHight(score)
    }
  },[score])
  return (
    <>
      {
       !isGaming && <div className="overlay">
         {
           score!==0 && <div className="flex mb-5 text-3xl text-red-400 pop">
            <div>🎊</div>
            <div className="font-bold">得分：{score} !</div>
          </div>
         }
          <div className="flex items-center mb-10 text-xl">
            <div>🥇</div>
            <div className="text-gray-600 font-bold">最高分：</div>
            <div className="text-yellow-500 font-bold">{highScore}</div>
          </div>
          <div className="flex mb-5">
            <button onClick={()=>{
              setGaming('try');setScore(0)}
            } className="button bg-gray-400  mr-8">随便点点</button>
            <button onClick={()=>{
              setScore(0);
              startTimer();
            }} className="button bg-green-600">{score!==0?'再来一下':'计时开始'}</button>
          </div>
          <div className="text-pink-800 my-5">
            ⚠让两边的6个格子镜像对称就可以得分啦！。
          </div>
          <div className="animate-bounce opacity-70">
            👇
          </div>
          <div className="text-xl text-gray-600 hover:text-gray-900 border-b-2 hover:border-gray-900 transition-all">
            <a href="https://github.com/shadowdreamer/mirroring" target="_blank">在Github上查看</a>
          </div>
        </div>
      }
    </>
  );
}

export default Overlay;
