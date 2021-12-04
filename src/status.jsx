import React, { useContext } from 'react';
import { dataCtx } from "./provider";

function Status() {
  const { score, step } = useContext(dataCtx)
  return (
    <div className="flex">
      <div className="mr-4">score:{score}</div>
      <div className={step<=2 && 'text-red-400'}>left step:{step}</div>
    </div>
  );
}

export default Status;
