import React, { useState,useContext } from 'react';
import { dataCtx } from './provider'
import { useDrag ,useDrop } from 'react-dnd'


function Cakes({children, index}) {
  const { shiftCake,data,step,lv,score } = useContext(dataCtx)

  const [{ isDragging }, drag ] = useDrag (()=>({
    type:'1',
    item:{ index, type: children},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    }),
  }),[ index,children,data,step,lv,score] )

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: '1',
      collect: (monitor) => ({isOver: !isDragging && !!monitor.isOver()}),
      drop: (item) => {
        if(item.index!==index){
          shiftCake(item,{ index,children})
        }
      }
    }),
    [isDragging,index,children,data,step,lv,score]
  )

  return (
    <>
      <div ref={(node) => drag(drop(node))} className={`cakes border-2 ${isOver&&'border-red-500'} `}>
        {children}
      </div>
    </>
  );
}

export default Cakes;
