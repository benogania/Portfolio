import { useState, useEffect } from "react";

const TypingEffect = () => {
  const words = ["Lets work together","Frontend Developer", "Backend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 120; // Speed of typing & deleting
  const pauseTime = 1500; // Pause time before deleting

  useEffect(() => {
    const currentWord = words[index];
    let timer;

    if (!isDeleting && text === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <h1 className="md:text-2xl">
      {text}
      <span className="animate-blink font-bold">|</span>
    </h1>
  );
};

export default TypingEffect;
