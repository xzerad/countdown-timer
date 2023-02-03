import { useEffect, useState } from "react";

export function useCountDownTimer(values: {seconds: number, hours: number, minutes: number, days: number}){

    const [counter, setCounter] = useState<{seconds: number, hours: number, minutes: number, days: number}>(values);

    useEffect(() => {
      const counterInterval = setInterval(() =>{
       if(counter.seconds > 0){
        counter.seconds --;
        setCounter({...counter});
       }else if (counter.minutes > 0){
        counter.seconds = 59;
        counter.minutes--;
        setCounter({...counter});
       }else if (counter.hours > 0){
        counter.hours--;
        counter.minutes = 59;
        counter.seconds = 59;
        setCounter({...counter});
       } else if (counter.days > 0 ){
        counter.days--;
        counter.hours = 23;
        counter.minutes = 59;
        counter.seconds = 59;
        setCounter({...counter});
       }
      }, 1000)
      
      return () => {
        clearInterval(counterInterval)
      }
    }, [])
    
    return {
        ...counter
    }

}