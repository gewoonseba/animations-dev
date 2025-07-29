"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./component.module.css";

interface Game {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export function AppstoreListComponent() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActiveGame(null);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const handleGameClick = (game: Game) => {
    setActiveGame(game);
  };

  return (
    <>
      {activeGame ? (
        <>
          <div className={styles.overlay} />
          <div className={styles.activeGame}>
            <div
              className={styles.inner}
              ref={ref}
              style={{ borderRadius: 12 }}
            >
              <div className={styles.header}>
                <Image
                  alt=""
                  height={56}
                  src={activeGame.image}
                  style={{ borderRadius: 12 }}
                  width={56}
                />
                <div className={styles.headerInner}>
                  <div className={styles.contentWrapper}>
                    <h2 className={styles.gameTitle}>{activeGame.title}</h2>
                    <p className={styles.gameDescription}>
                      {activeGame.description}
                    </p>
                  </div>
                  <button className={styles.button} type="button">
                    Get
                  </button>
                </div>
              </div>
              <p className={styles.longDescription}>
                {activeGame.longDescription}
              </p>
            </div>
          </div>
        </>
      ) : null}
      <ul className={styles.list}>
        {GAMES.map((game) => (
          <li key={game.title} style={{ borderRadius: 8 }}>
            <button
              className={styles.gameButton}
              onClick={() => handleGameClick(game)}
              type="button"
            >
              <Image
                alt=""
                height={56}
                src={game.image}
                style={{ borderRadius: 12 }}
                width={56}
              />
              <div className={styles.gameWrapper}>
                <div className={styles.contentWrapper}>
                  <h2 className={styles.gameTitle}>{game.title}</h2>
                  <p className={styles.gameDescription}>{game.description}</p>
                </div>
                <button className={styles.button} type="button">
                  Get
                </button>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

const GAMES: Game[] = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },
  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
