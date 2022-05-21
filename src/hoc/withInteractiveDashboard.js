import { useRef, useEffect, useState } from "react";

export const withInteractiveDashboard = (Component) => () => {
  const navbarRef = useRef();
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const props = {
    dashboardRef: {
      navbarRef,
    },
    navbarScrolled,
  };

  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight;

    window.addEventListener("scroll", (e) => {
      const { target } = e;
      const scrollTop = target.scrollingElement.scrollTop;

      if (scrollTop > navbarHeight) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    });
  }, []);

  return <Component {...props} />;
};
