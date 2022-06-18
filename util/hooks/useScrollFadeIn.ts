import React,{useEffect, useRef,useCallback} from 'react';


const useScrollFadeIn = () => {
  const dom=useRef<any>(null);

  const handleScroll=useCallback(([entry]:any)=>{
    const {current}=dom; 
    if(entry.isIntersecting) {
      current.style.transitionProperty = 'opacity transform';
      current.style.transitionDuration = '1s';
      current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
      current.style.transitionDelay = '0s';
      current.style.opacity = 1;
      current.style.transform = 'translate3d(0, 0, 0)';
    }
    else{
      console.log('노출안됨')
    }
  },[]);
  
  useEffect(()=>{
    let observer :IntersectionObserver;
    const {current}=dom;
    
    if(current){
      observer=new IntersectionObserver(handleScroll, { threshold: 0.3 });
      observer.observe(current) //observe는 객체에 이벤트를 붙이는 함수 
    };
    return ()=> observer && observer.disconnect() ;
  }, [handleScroll]);

  return {
    ref:dom,
    style: {
      opacity: 0,
      transform: 'translate3d(0, 50%, 0)',
    }
  };
};

export default useScrollFadeIn;



// Intersection Observer 객체를 생성하면서, Callback Function 과 option 을 전달한다.
// Intersection Observer 에서 observe 로 구독할 Target Element 를 추가한다.
// Target Element 가 options.threshold 로 정의한 Percent(%) 만큼 화면에 노출 혹은 제외 되면, entries 배열 에 추가하고, Callback Function 을 호출한다.
// Callback Function 에서 전달 받은 entries 배열을 확인하면서, isIntersecting 으로 노출 여부를 확인한다.
// 만약 더이상 Target Element 를 구독할 필요가 없다면, IntersectionObserver 에서 unobserve 로 제거 할 수 있다.