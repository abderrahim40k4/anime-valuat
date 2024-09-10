import Image from "next/image";
import { motion } from 'framer-motion';
import { MotionDiv } from "./MotionDiv";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface Prop {
  anime: AnimeProp;
  index: number;
}
interface Varaint {
  hidden: object;
  visible: object;
}
const variants = {
  hidden: {
    opactiy: 0

  },
  visible: {
    opacity: 1
  },

};
function AnimeCard({ anime, index }: Prop) {
  return (

    <MotionDiv
      variants={variants}
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0, }}
      initial="hidden"
      animate="visible"
      className="max-w-sm rounded relative w-full">
      <Card>
        <CardHeader>
         <div className="flex justify-between items-center">
         <CardTitle>
          <h2 className="font-bold text-xl line-clamp-1 w-full">
            {anime.name}
          </h2>
          </CardTitle>
          <CardDescription>
          <p className="text-sm font-bold capitalize">
              {anime.kind}
            </p>
          </CardDescription>
         </div>
        </CardHeader>
        <CardContent className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one/${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
        </CardContent>
        <CardFooter className="flex gap-4 items-center justify-between">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{anime.score}</p>
          </div>
        </CardFooter>
      </Card>
    </MotionDiv>

  );
}

export default AnimeCard;
