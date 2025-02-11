import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from 'react-router-dom'; 
import { gifpicture } from ".";

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true); 
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
    <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
      <motion.div  initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{duration: 1.2}}>
      <div id="card" className={`${cardClass}`} onClick={toggleCard}>     
        <div id="card-inside">
          <div className="wrap">
            <p>С Днём Рождения , Моя Любимая Мамуля!</p>
            <p className="text-xs">Я желаю тебе крепкого здоровья, радости, счастья и исполнения всех твоих желаний 🌠 
            </p>
            <p className="text-xs">Пусть в твоей жизни будет как можно больше светлых моментов, улыбок и теплоты. 
            Пусть каждый новый день приносит тебе радость 🥰</p>
            <p className="text-xs">
            Спасибо за твою доброту, заботу и поддержку. Ты всегда знаешь как дать мудрый совет и как сделать даже самый 
            обычный день тёплым и радостным 🫂💗💞
            </p>
            <p className="text-xs"> Я бесконечно ценю всё, чему ты меня научила, и горжусь тем, что именно ты моя мама! 🤗😽</p>
            <p className="text-xs">
            Я тебя так сильно люблю и так благодарна за всё, что ты для меня делаешь. Я всегда рядом и очень тебя люблю! 💕
            </p>
            <p className="text-sm">
            С Днём Рождения, моя дорогая мамуля! 🎂🎁🎊💖😘💝
            </p>
            <p className="signed">Юличка</p>
          </div>
        </div>

        <div id="card-front">
          <div className="wrap">
            <h1>С Днём Рождения Мамуля!</h1>
            <img src={gifpicture} alt="Birthday Roses" className="w-max-60 max-h-60 justify-center mx-auto"></img>
          </div>
        </div>
    </div>

      </motion.div>

    {/* prone to bugs */}
      {isCardOpened && (
        <motion.div className="-mt-[3rem]" initial={{ opacity: 0, visibility: "hidden" }}
        animate={{ opacity: 1, visibility: "visible" }}
        transition={{duration: 1.2}}> 
        <Link to ='/cake'>
        <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
          Следующая Страница
          </p>
        </Link>
            
        </motion.div>
         
        )}

    </div>
    
    </div>
    
  );
}

export default Card;