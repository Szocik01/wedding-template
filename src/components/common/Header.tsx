import { useCallback, useEffect, useRef } from "react";

const Header = () => {
  const headerRef = useRef<HTMLHeadElement>(null);

  const scrollHandler = useCallback(() => {
    if (window.scrollY > 0) {
      headerRef.current?.classList.add("scrolled");
    } else {
      headerRef.current?.classList.remove("scrolled");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <nav className="nav-links">
        <div className="nav-item">
          <a href="#home" className="nav-link">
            Początek
          </a>
        </div>
        <div className="nav-item">
          <a href="#bride-groom" className="nav-link">
            Państwo młodzi
          </a>
        </div>
        <div className="nav-item">
          <a href="#plan" className="nav-link">
            Plan wesela
          </a>
        </div>
        <div className="nav-item">
          <a href="" className="nav-link">
            Kontakt
          </a>
        </div>
        <div className="nav-item">
          <a href="" className="nav-link">
            Gdzie i kiedy
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
