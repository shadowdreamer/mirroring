import React, { createContext, useCallback, useEffect, useState } from 'react';
import { genGame ,checkGame } from './game'
export const dataCtx = createContext({
  data:[],
  setData:()=>{},
  shiftCake:()=>{},
  step:0,score:0,
})

const initial = genGame(2)

export default function ({ children }) {
  const [data,setData] = useState(initial);
  const [lv, setLv] = useState(2);
  const [step,setStep] = useState(lv);
  const [score,setScore] = useState(0);

  function shiftCake(drag,drop){
    const _data = [...data]; 
    [ _data[drop.index], _data[drag.index] ] =
    [ _data[drag.index], _data[drop.index] ];
    
    if(checkGame(_data)){
      setData(genGame(lv));
      setScore(score+ lv*100);
      setStep(lv);
      if(lv<5){setLv(lv+1)}
    }else{
      if(step <= 1){
        setData(genGame(lv));
        setStep(lv);
      }else{
        setData( _data );
        setStep(step-1);
      }
    }
  }
 
  return (
    <dataCtx.Provider value={ { data,step,score, setData,shiftCake } }>
      {children}
    </dataCtx.Provider>
  )

}
