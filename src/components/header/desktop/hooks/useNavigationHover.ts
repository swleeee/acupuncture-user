import { useCallback, useEffect, useState, useRef } from "react";

export const useNavigationHover = () => {
  const initStates = Array(4).fill(false);

  const parentRef = useRef<HTMLUListElement>(null);
  const childRefs = useRef<HTMLLIElement[]>(Array(4).fill(null));
  const [states, setStates] = useState<boolean[]>(initStates);

  const handleMouseOver = useCallback((index: number) => {
    setStates((prevStates) => prevStates.map((_, i) => i === index));
  }, []);

  const handleMouseOut = useCallback(() => {
    setStates(initStates);
  }, []);

  const setRef = useCallback(
    (index: number) => (el: HTMLLIElement | null) => {
      if (!el) return;

      childRefs.current[index] = el;
    },
    []
  );

  useEffect(() => {
    const childEls = childRefs.current;

    const addMouseOverHandler = (el: HTMLLIElement, index: number) => {
      const mouseOverHandler = (e: MouseEvent) => {
        e.stopPropagation();
        handleMouseOver(index);
      };

      el.addEventListener("mouseover", mouseOverHandler);

      return () => {
        el.removeEventListener("mouseover", mouseOverHandler);
      };
    };

    const cleanups = childEls.map((el, i) => el && addMouseOverHandler(el, i));

    const parentEl = parentRef.current;
    parentEl?.addEventListener("mouseout", handleMouseOut);

    return () => {
      cleanups.forEach((cleanup) => cleanup && cleanup());
      parentEl?.removeEventListener("mouseout", handleMouseOut);
    };
  }, [handleMouseOver, handleMouseOut]);

  return { parentRef, states, setRef };
};
