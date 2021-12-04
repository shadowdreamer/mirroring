import React, { useContext, useEffect } from 'react';
import { dataCtx } from './provider'
import Cakes from "./cakes";
function RectRender() {
  const { data , setData } = useContext(dataCtx)
  const left1 = data.slice(0,3)
  const left2 = data.slice(3,6)
  const right1 = data.slice(9,12)
  const right2 = data.slice(6,9)
  return (
    <div className="flex">
      <div className="flex flex-col flex-wrap">
        {left1.map((el,i)=><Cakes key={i} index={i}>{el}</Cakes>)}
      </div>
      <div className="mr-5 flex flex-col flex-wrap">
        {left2.map((el,i)=><Cakes key={i+3} index={i+3}>{el}</Cakes>)}
      </div>
      <div className="flex flex-col flex-wrap">
        {right1.map((el,i)=><Cakes key={i+9} index={i+9}>{el}</Cakes>)}
      </div>
      <div className="flex flex-col flex-wrap">
        {right2.map((el,i)=><Cakes key={i+6} index={i+6}>{el}</Cakes>)}
      </div>
    </div>
  );
}

export default RectRender;
