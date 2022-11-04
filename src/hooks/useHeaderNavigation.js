import { useRef, useCallback, useEffect } from "react";

const useHeaderNavigation = (target) => {
  const targetDOM = useRef(target);
  const headerRef = useRef();

  const handleScroll = useCallback(([entry]) => {
    const { current } = headerRef;
    console.log(targetDOM.current);

    if (entry.isIntersecting) {
      current.style.color = "#ffbd39";
    } else {
      current.style.color = "white";
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = targetDOM?.current;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: headerRef,
    style: {
      color: "white",
    },
  };
};

export default useHeaderNavigation;
