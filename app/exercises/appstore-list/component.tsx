/** biome-ignore-all lint/performance/noImgElement: <Just testing framer motion> */
'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useTweakpane } from '@/components/use-tweakpane';
import styles from './component.module.css';

interface Game {
  title: string;
  description: string;
  longDescription: string;
  image: string;
}

export function AppstoreListComponent() {
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () =>
    setActiveGame(null)
  );

  // Tweakpane controls for layout animations
  const animationParams = useTweakpane(
    {
      overlayDuration: 0.3,
      layoutDuration: 0.6,
      layoutType: 'spring',
      layoutBounce: 0.1,
      contentFadeDuration: 0.1,
    },
    {
      title: 'Appstore List Animation',
      controls: [
        {
          key: 'overlayDuration',
          label: 'overlay duration (s)',
          min: 0.1,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'layoutDuration',
          label: 'layout duration (s)',
          min: 0.2,
          max: 2,
          step: 0.1,
          format: (v: number) => v.toFixed(1),
        },
        {
          key: 'layoutType',
          label: 'layout animation',
          type: 'string',
          options: {
            spring: 'spring',
            tween: 'tween',
          },
        },
        {
          key: 'layoutBounce',
          label: 'layout bounce',
          min: 0,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'contentFadeDuration',
          label: 'content fade (s)',
          min: 0.05,
          max: 0.5,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
      ],
    }
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveGame(null);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeGame ? (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className={styles.overlay}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={{ duration: animationParams.overlayDuration }}
            />
            <div className={styles.activeGame}>
              <motion.div
                className={styles.inner}
                layoutId={`wrapper-${activeGame.title}`}
                ref={ref}
                style={{ borderRadius: 12 }}
                transition={{
                  type: animationParams.layoutType,
                  duration: animationParams.layoutDuration,
                  bounce: animationParams.layoutBounce,
                }}
              >
                <div className={styles.header}>
                  <motion.img
                    alt={`${activeGame.title} app icon`}
                    height={56}
                    layoutId={`img-${activeGame.title}`}
                    src={activeGame.image}
                    style={{ borderRadius: 12 }}
                    width={56}
                  />
                  <div className={styles.headerInner}>
                    <div className={styles.contentWrapper}>
                      <motion.h2
                        className={styles.gameTitle}
                        layoutId={`title-${activeGame.title}`}
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        className={styles.gameDescription}
                        layoutId={`descr-${activeGame.title}`}
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.button
                      className={styles.button}
                      layoutId={`btn-${activeGame.title}`}
                      type="button"
                    >
                      Get
                    </motion.button>
                  </div>
                </div>
                <motion.p
                  animate={{ opacity: 1 }}
                  className={styles.longDescription}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: animationParams.contentFadeDuration }}
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className={styles.list}>
        {GAMES.map((game) => (
          <motion.li
            key={game.title}
            layoutId={`wrapper-${game.title}`}
            onClick={() => setActiveGame(game)}
            style={{ borderRadius: 8 }}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveGame(game);
              }
            }}
            transition={{
              type: animationParams.layoutType,
              duration: animationParams.layoutDuration,
              bounce: animationParams.layoutBounce,
            }}
          >
            <motion.img
              alt={`${game.title} app icon`}
              height={56}
              layoutId={`img-${game.title}`}
              src={game.image}
              style={{ borderRadius: 12 }}
              width={56}
            />
            <div className={styles.gameWrapper}>
              <div className={styles.contentWrapper}>
                <motion.h2
                  className={styles.gameTitle}
                  layoutId={`title-${game.title}`}
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  className={styles.gameDescription}
                  layoutId={`descr-${game.title}`}
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                className={styles.button}
                layoutId={`btn-${game.title}`}
                type="button"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

const GAMES: Game[] = [
  {
    title: 'The Oddysey',
    description: 'Explore unknown galaxies.',
    longDescription:
      'Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png',
  },
  {
    title: 'Angry Rabbits',
    description: 'They are coming for you.',
    longDescription:
      'The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png',
  },
  {
    title: 'Ghost town',
    description: 'Find the ghosts.',
    longDescription:
      'You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp',
  },
  {
    title: 'Pirates in the jungle',
    description: 'Find the treasure.',
    longDescription:
      'You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png',
  },

  {
    title: 'Lost in the mountains',
    description: 'Find your way home.',
    longDescription:
      'You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp',
  },
];
