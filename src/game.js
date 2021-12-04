import { genRnGroup } from './utils'
const cakes = ['🎂','🥞', '🧁', '🍭'];
const rn = n=>{
  return  Math.floor(Math.random()*4)
}

function randomCake(){
  return cakes[rn(4)]
}
export function genGame(lv){
  const mirror = ['','','','','',''];
  const p = genRnGroup(6,lv);
  for(let i of p){
    mirror[i] = randomCake()
  }
  const game = [...mirror,...mirror];
  for(let i =0; i<=lv; i++){
    for(let i of p){
      let m = Math.random()>0.5 ? i: i+6;
      let n = rn(12);
      while(m===n){n=rn(12)};
      [game[m],game[n]] = [game[n],game[m]]

    }
  }
  return game
}
/**
 * 
 * @param {string[]} game 
 */
export function checkGame(game){
  let l = game.length/2;
  for(let i=0; i<l; i++){
    if(game[i] != game[i+l])return false
  };
  return true
}