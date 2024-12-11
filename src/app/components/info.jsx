"use client"
import { motion, useMotionValue } from "motion/react"
import { Biblioteca } from "./conteudo";
import SwipeCards from "./slides";
import { useEffect } from "react";
import { useState } from "react";

const DynamicContent = ({ FilterKey }) => {
    const filteredCards = Biblioteca.filter((projeto) => projeto.stack === FilterKey);
    const [conteudo, setConteudo] = useState(filteredCards);
  
    // Renderiza apenas o último item (o da frente)
    const currentCard = conteudo[conteudo.length - 1];
  
    return (
      <div>
        {currentCard ? (
          <Conteudoanimado
            key={currentCard.id}
            conteudo={currentCard}
            setConteudo={setConteudo}
            FilterKey={FilterKey}
            isFront={true} // Sempre verdadeiro, pois só um card é renderizado
          />
        ) : (
          <p>Não há mais cards disponíveis.</p>
        )}
      </div>
    );
  };
  
  const Conteudoanimado = ({ conteudo, FilterKey, isFront }) => {
    const { titulo, descricao, linguagem } = conteudo; // Desestrutura o conteúdo recebido
    const y = useMotionValue(0);
  
      
  
    return (
      <div className="h-96 w-full flex">
        <div className="h-full w-1/2">
          {/* SwipeCards */}
          <SwipeCards FilterKey={FilterKey} />
        </div>
        <div className="h-full w-1/2 flex flex-col items-start">
          {/* Renderizar conteúdo animado */}
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.13 }}
            className="text-xl font-bold"
          >
            {titulo}
          </motion.h1>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.13 }}
            className="text-lg text-gray-600"
          >
            {descricao}
          </motion.h2>
          <motion.h3
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.13 }}
            className="text-md text-gray-400"
          >
            {linguagem}
          </motion.h3>
        </div>
      </div>
    );
  };
  
  export default DynamicContent;