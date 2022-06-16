import { StaticImageData } from "next/image";
import mushmom from '/public/images/mushmom.png'
import lucid from '/public/images/lucid.png'
import crew from '/public/images/crew.png'

export interface TitleProps{
  positionY:number;
  innerWidth:number;
}

export interface reqProps{
  positionY:number;
  innerWidth:number;
}

export const requirements:{
  title:string,
  description:(string|JSX.IntrinsicAttributes)[],
  image:StaticImageData}[]=[
  {
    title:'가입대상',
    description:['외대인이라면 누구나','가입할 수 있어요'],
    image :crew,
  },
  {
    title:'가입레벨',
    description:['레벨은 200이상', '이어야해요'],
    image :mushmom,
  },
  {
    title:'가입연락',
    description:['오픈카톡으로 연락주세요','엘리시움 외대경제 김규범'],
    image :lucid,
  },
]