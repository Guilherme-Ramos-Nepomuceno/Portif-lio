"use client"
import  React, {useEffect, useState} from "react";
import { motion, useMotionValue, useTransform, useMotionValueEvent } from "motion/react";
import { Biblioteca } from "./conteudo";

const SwipeCards = ({FilterKey, bgcor, cor}) => {
    const filteredCards = Biblioteca.filter((projeto) => projeto.stack === FilterKey).map(({ id, url, titulo, descricao, linguagem,  }) => ({ id, url, titulo, descricao, linguagem })); 
    const [cards, setCards] = useState(filteredCards);
    return (
        <div
          className="grid h-[400px] md:h-[600px] w-full place-items-center"
          style={{background: bgcor, color: cor }}
        >
          {cards.map((card, index) => (
            <Card
              key={card.id}
              cards={cards}
              setCards={setCards}
              {...card}
              isFront={index === cards.length - 1}
            ></Card>
          ))}
        </div>
      );
    };
    
    const Card = ({ id, url, titulo, descricao, linguagem, setCards, isFront }) => {
      const x = useMotionValue(0);
    
      const rotateRaw = useTransform(x, [-200, 150], [-18, 18]);
      const opacity = useTransform(x, [-200, 0, 150], [0, 1, 0]);
    
      const rotate = useTransform(() => {
        const offset = isFront ? 0 : id % 2 ? 6 : -6;
        return `${rotateRaw.get() + offset}deg`;
      });
    
      const handleDragEnd = (event, info) => {
        if (Math.abs(info.offset.x) > 100) {
          setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const removedCard = updatedCards.pop(); // Remove o último (card da frente)
            return [removedCard, ...updatedCards]; // Adiciona no final
          });
    
          x.set(0); // Reseta o valor de `x`
        }
      };
    
      return (
        <>
        {isFront && ( 
        <div className="">
            <motion.h1
                className="mt-4 text-4xl Font-Mangoextrabold text-center"
                style={{ opacity }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400}}
                >{titulo} 
            </motion.h1>
            <motion.h1
                className="mt-4 text-2xl Font-Mangobold text-center"
                style={{ opacity }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                >{descricao}
            </motion.h1>
            <motion.h1
                className="mt-4 text-base Font-Mangobold text-center"
                style={{ opacity }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: -5, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400}}
                >{linguagem}
            </motion.h1>
        </div>
        )}
        <motion.img
                src={url}
                alt="Card"
                className="grid origin-bottom rounded-lg object-cover hover:cursor-grab active:cursor-grabbing
                           h-32 w-40 sm:h-40 sm:w-48 md:h-64 md:w-72 lg:h-64 lg:w-72 xl:h-72 xl:w-80"
                style={{
                    gridRow: 1,
                    gridColumn: 1,
                    x,
                    rotate,
                    transform:"0.2s transform linear",
                    boxShadow: isFront
                    ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
                    : undefined,
                }}
                animate={{
                    scale: isFront ? 1 : 0.98,
                }}
                drag={isFront ? "x" : false} // Apenas o card da frente é arrastável
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                onDragEnd={handleDragEnd}
            />
        </>
      );
    };
  export default SwipeCards;
  
 