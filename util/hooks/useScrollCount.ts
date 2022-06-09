import React,{useEffect, useRef,useCallback} from 'react';


const useScrollCount = (end:number,start:number=0,duration:number=3000) => {
  const option={threshold:0.7};
  const dom=useRef<any>(null);
  const stepTime:number=Math.abs(Math.ceil(duration)/(end-start)*20);
  const oneOverTen:number=Math.ceil(end/10); //ceil안하면 10%씩 더할 때 end를 초과함

  const handleScroll=useCallback(([entry]:any)=>{
    const {current}=dom; 
    if(entry.isIntersecting){
      let currentNumber=start;
      const counter=setInterval(()=>{
        //currentNumber가 90% or 100% 미만이면 10%씩 더함
        currentNumber+= currentNumber>= oneOverTen*9 ?
        //currentNumber가 end를 100으로 나눈 나머지를 뺀 값 이상이면 1씩 더함
        ( currentNumber>=(Math.floor(end/100))*100 ? 1 : 100):oneOverTen;
        current.innerHTML= String(currentNumber);
        if(currentNumber >= end){
          clearInterval(counter);
        }
      },end>1000 ? stepTime :20)
    }
  },[]);
  
  useEffect(()=>{
    let observer :IntersectionObserver;
    const {current}=dom;
    
    if(current){
      observer=new IntersectionObserver(handleScroll, option);
      observer.observe(current) //observe는 객체에 이벤트를 붙이는 함수 
    };
    return ()=> observer && observer.disconnect() ;
  }, [handleScroll]);

  return {
    ref:dom,
  };
};

export default useScrollCount;