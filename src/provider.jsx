import React, { createContext, useCallback, useEffect, useState } from 'react';
import { genGame ,checkGame } from './game'
export const dataCtx = createContext({
  data:[],
  setData:()=>{},
  shiftCake:()=>{},
  step:0,score:0,
  setScore:()=>{},
  countdown:0,
  setCountdown:()=>{},
  startTimer:()=>{},
  isGaming:false,setGaming:()=>{},
})

const initial = genGame(2)

export default function ({ children }) {
  const [data,setData] = useState(initial);
  const [lv, setLv] = useState(2);
  const [step,setStep] = useState(lv);
  const [score,setScore] = useState(0);
  const [countdown, setCountdown] = useState(60*1000)
  const [isGaming,setGaming] = useState(false)

  let timer = null;

  function startTimer(){
    clearInterval(timer);
    let stamp = Date.now();
    setLv(2)
    setData(genGame(2));
    setStep(2);
    setGaming(true);
    timer = setInterval(() => {
      let now = Date.now();
      if((now - stamp) < countdown){
        setCountdown(countdown - (now - stamp))
      }else{
        clearInterval(timer);
        setCountdown(60*1000)
        setGaming(false)
      }
    }, 33);
  }
  function shiftCake(drag,drop){
    const _data = [...data]; 
    [ _data[drop.index], _data[drag.index] ] =
    [ _data[drag.index], _data[drop.index] ];
    
    if(checkGame(_data)){
      setData(genGame(lv));
      setScore(score+ step*100);
      setStep(lv);
      if(lv<5){setLv(lv+(Math.random()>0.3?1:0))}
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
    <dataCtx.Provider value={ { 
      data,step,score,countdown,setCountdown, startTimer, setData,shiftCake ,
      isGaming,setGaming,setScore,
    } }>
      {children}
    </dataCtx.Provider>
  )

}
