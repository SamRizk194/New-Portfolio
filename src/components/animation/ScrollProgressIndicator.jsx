import { useEffect, useRef } from "react";

const ScrollProgressIndicator = () => {
  const scrollBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollBarRef.current) {
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollableHeight = scrollHeight - clientHeight;
        const scrollY = window.scrollY;
        const scrollProgress = (scrollY / scrollableHeight) * 100;

        scrollBarRef.current.style.transform = `translateY(-${
          100 - scrollProgress
        }%)`;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-[50vh] right-1 -translate-y-1/2 w-1.5 sm:w-2 h-[120px] bg-neutral-800 rounded-full overflow-hidden z-10">
      <div
        ref={scrollBarRef}
        className="w-full h-full rounded-full bg-[#00e65c]"
      />
    </div>
  );
};

export default ScrollProgressIndicator;
