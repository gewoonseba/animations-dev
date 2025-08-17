/** biome-ignore-all lint/performance/noImgElement: <just for the exercise> */
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { useTweakpane, type AnimationParams } from '../../../components/use-tweakpane';
import styles from './component.module.css';

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  logo: string;
}

interface CardProps {
  card: CardData;
  setActiveCard: (card: CardData | null) => void;
  animationParams: AnimationParams;
}

interface ActiveCardProps {
  activeCard: CardData;
  setActiveCard: (card: CardData | null) => void;
  animationParams: AnimationParams;
}

function Card({ card, setActiveCard, animationParams }: CardProps) {
  return (
    <motion.div
      className={styles.card}
      layoutId={`card-${card.title}`}
      onClick={() => setActiveCard(card)}
      style={{ borderRadius: 20 }}
      whileTap={{ scale: animationParams.tapScale }}
    >
      <motion.img
        alt=""
        layoutId={`image-${card.title}`}
        src={card.image}
        style={{ borderRadius: 20 }}
      />
      <motion.button
        aria-hidden
        className={styles.closeButton}
        layoutId={`close-button-${card.title}`}
        style={{ opacity: 0 }}
        tabIndex={-1}
        type="button"
      >
        <svg
          fill="none"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Close</title>
          <path
            d="M6 18 18 6M6 6l12 12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
      <motion.div
        className={styles.cardContent}
        layoutId={`card-content-${card.title}`}
      >
        <div className={styles.cardText}>
          <motion.h2
            className={styles.cardHeading}
            layoutId={`card-heading-${card.title}`}
          >
            Game of the day
          </motion.h2>
        </div>
        <motion.div
          className={styles.extraInfo}
          layoutId={`card-extra-info-${card.title}`}
          style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
        >
          <motion.img
            alt=""
            className={styles.roundedLg}
            height={40}
            layoutId={`card-game-image-${card.title}`}
            src={card.logo}
            width={40}
          />
          <div className={styles.descWrapper}>
            <motion.span
              className={styles.gameTitle}
              layoutId={`card-game-title-${card.title}`}
            >
              {card.title}
            </motion.span>
            <motion.span
              className={styles.gameSubtitle}
              layoutId={`card-game-subtitle-${card.title}`}
            >
              {card.description}
            </motion.span>
          </div>
          <motion.button
            className={styles.getButton}
            layoutId={`card-button-${card.title}`}
            type="button"
          >
            Get
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.longDescription}
        layoutId={`card-long-description-${card.title}`}
        style={{ position: 'absolute', top: '100%', opacity: 0 }}
      >
        <div>
          <p>
            <b>Are you ready?</b> {card.longDescription}
          </p>
          <p>
            <b>The never ending adventure</b>
            In this game set in a fairy tale world, players embark on a quest
            through mystical lands filled with enchanting forests and towering
            mountains.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ActiveCard({ activeCard, setActiveCard, animationParams }: ActiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref as React.RefObject<HTMLElement>, () =>
    setActiveCard(null)
  );

  return (
    <motion.div
      className={`${styles.card} ${styles.cardActive}`}
      layoutId={`card-${activeCard.title}`}
      ref={ref}
      style={{ borderRadius: 0 }}
    >
      <div className={styles.cardInner}>
        <motion.img
          alt=""
          layoutId={`image-${activeCard.title}`}
          src={activeCard.image}
          style={{ borderRadius: 0 }}
        />
        <motion.button
          aria-label="Close button"
          className={styles.closeButton}
          layoutId={`close-button-${activeCard.title}`}
          onClick={() => setActiveCard(null)}
          type="button"
        >
          <svg
            fill="none"
            height="20"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              d="M6 18 18 6M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
        <motion.div
          className={`${styles.cardContent} ${styles.activeCardContent}`}
          layoutId={`card-content-${activeCard.title}`}
        >
          <div className={styles.cardText}>
            <motion.h2
              className={styles.cardHeading}
              layout
              layoutId={`card-heading-${activeCard.title}`}
            >
              Game of the day
            </motion.h2>
          </div>
          <motion.div
            className={styles.extraInfo}
            layoutId={`card-extra-info-${activeCard.title}`}
            style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          >
            <motion.img
              alt=""
              className={styles.roundedLg}
              height={40}
              layoutId={`card-game-image-${activeCard.title}`}
              src={activeCard.logo}
              width={40}
            />
            <div className={styles.descWrapper}>
              <motion.span
                className={styles.gameTitle}
                layoutId={`card-game-title-${activeCard.title}`}
              >
                {activeCard.title}
              </motion.span>
              <motion.span
                className={styles.gameSubtitle}
                layoutId={`card-game-subtitle-${activeCard.title}`}
              >
                {activeCard.description}
              </motion.span>
            </div>
            <motion.button
              className={styles.getButton}
              layout
              layoutId={`card-button-${activeCard.title}`}
              type="button"
            >
              Get
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={styles.longDescription}
        layoutId={`card-long-description-${activeCard.title}`}
      >
        <p>
          <b>Are you ready?</b> {activeCard.longDescription}
        </p>
        <p>
          <b>The never ending adventure </b>
          In this game set in a fairy tale world, players embark on a quest
          through mystical lands filled with enchanting forests and towering
          mountains. Players can explore the world, build their own viking
        </p>
      </motion.div>
    </motion.div>
  );
}

export function AppstoreCardComponent() {
  const [activeCard, setActiveCard] = useState<CardData | null>(null);

  // Tweakpane controls for card animations
  const animationParams = useTweakpane(
    {
      layoutDuration: 0.6,
      layoutType: 'spring',
      layoutBounce: 0.1,
      overlayDuration: 0.3,
      tapScale: 0.98,
    },
    {
      title: 'Appstore Card Animation',
      position: { top: '16px', left: '50%' },
      controls: [
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
            options: {
              spring: 'spring',
              tween: 'tween',
            },
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
          key: 'overlayDuration',
          label: 'overlay duration (s)',
          min: 0.1,
          max: 1,
          step: 0.05,
          format: (v: number) => v.toFixed(2),
        },
        {
          key: 'tapScale',
          label: 'tap scale',
          min: 0.9,
          max: 1,
          step: 0.01,
          format: (v: number) => v.toFixed(2),
        },
      ],
    }
  );

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveCard(null);
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className={styles.cardsWrapper}>
      {CARDS.map((card) => (
        <Card card={card} key={card.title} setActiveCard={setActiveCard} animationParams={animationParams} />
      ))}
      <AnimatePresence>
        {activeCard ? (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.overlay}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: animationParams.overlayDuration }}
          />
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {activeCard ? (
          <ActiveCard activeCard={activeCard} setActiveCard={setActiveCard} animationParams={animationParams} />
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const CARDS: CardData[] = [
  {
    title: 'Vikings',
    subtitle: 'Clash of the Norse Warriors',
    description: 'A game about vikings',
    longDescription:
      'A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.',
    image:
      'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp',
    logo: 'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp',
  },
];
