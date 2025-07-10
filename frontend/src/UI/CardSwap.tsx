"use client";

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
  type ReactNode,
  type RefObject,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
} from "react";
import gsap from "gsap";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardSwapHandle {
  swap: () => void;
  reverseSwap: () => void;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border border-white bg-black [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ""} ${rest.className ?? ""}`.trim()}
    />
  ),
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement|null>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number,
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

const CardSwap = forwardRef<CardSwapHandle, CardSwapProps>(
  (
    {
      width = 500,
      height = 400,
      cardDistance = 60,
      verticalDistance = 70,
      skewAmount = 6,
      easing = "elastic",
      children,
    },
    ref,
  ) => {
    const config =
      easing === "elastic"
        ? {
            ease: "elastic.out(0.6,0.9)",
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: "power1.inOut",
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          };

    const childArr = useMemo(
      () => Children.toArray(children) as ReactElement<CardProps>[],
      [children],
    );

    const refs = useMemo<CardRef[]>(
      () => childArr.map(() => React.createRef<HTMLDivElement>()),
      [childArr.length],
    );

    const order = useRef<number[]>(
      Array.from({ length: childArr.length }, (_, i) => i),
    );

    const container = useRef<HTMLDivElement>(null);

    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const swap = () => {
      if (order.current.length < 2) return;
      if (tlRef.current?.isActive()) return;
      const tl = gsap.timeline();
      tlRef.current = tl;

      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;

      tl.to(elFront, {
        y: "+=300",
        duration: config.durDrop,
        ease: config.ease,
      });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      const backSlot = makeSlot(
        refs.length - 1,
        cardDistance,
        verticalDistance,
        refs.length,
      );
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex });
        },
        undefined,
        "return",
      );
      tl.set(elFront, { x: backSlot.x, z: backSlot.z }, "return");
      tl.to(
        elFront,
        {
          y: backSlot.y,
          duration: config.durReturn,
          ease: config.ease,
        },
        "return",
      );

      tl.call(() => {
        order.current = [...rest, front];
      });
    };

    useImperativeHandle(ref, () => ({
      reverseSwap,
      swap,
    }));

    useEffect(() => {
      const total = refs.length;
      refs.forEach((r, i) =>
        placeNow(
          r.current!,
          makeSlot(i, cardDistance, verticalDistance, total),
          skewAmount,
        ),
      );
    }, [cardDistance, verticalDistance, skewAmount]);

    const reverseSwap = () => {
      if (order.current.length < 2) return;
      if (tlRef.current?.isActive()) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      const rest = order.current.slice(0, -1);
      const back = order.current[order.current.length - 1];
      const elBack = refs[back].current!;

      // Bring back to front: start it 500 below its target slot
      const frontSlot = makeSlot(
        0,
        cardDistance,
        verticalDistance,
        refs.length,
      );
      gsap.set(elBack, {
        y: frontSlot.y + 300,
        x: frontSlot.x,
        z: frontSlot.z,
        zIndex: frontSlot.zIndex - 1, // Temporarily under
        xPercent: -50,
        yPercent: -50,
      });

      // Move up to front slot
      tl.to(elBack, {
        y: frontSlot.y,
        duration: config.durDrop,
        ease: config.ease,
      });

      // Promote rest backward
      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current!;
        const slot = makeSlot(
          i + 1,
          cardDistance,
          verticalDistance,
          refs.length,
        );
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`,
        );
      });

      // Make sure back card is now top
      tl.call(() => {
        gsap.set(elBack, { zIndex: refs.length });
        order.current = [back, ...rest];
      });
    };

    const rendered = childArr.map((child, i) =>
      isValidElement<CardProps>(child)
        ? cloneElement(child, {
            key: i,
            ref: refs[i],
            style: { width, height, ...(child.props.style ?? {}) },
          } as CardProps & React.RefAttributes<HTMLDivElement>)
        : child,
    );

    return (
      <div
        ref={container}
        className="relative w-full h-full perspective-[900px] overflow-visible"
        style={{ width, height }}
      >
        {rendered}
      </div>
    );
  },
);

CardSwap.displayName = "CardSwap";

export default CardSwap;
