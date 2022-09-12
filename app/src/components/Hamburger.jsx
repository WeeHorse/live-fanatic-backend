function Hamburger({ isOpen }) {
  return (
    <>
      <div className="hamburger">
        <span className="material-symbols-outlined" id="burger">
          menu
        </span>
        <span className="material-symbols-outlined" id="cross">
          close
        </span>
      </div>

      <style jsx="true">{`
        #burger {
          display: ${isOpen ? "none" : "grid"};
        }
        #cross {
          display: ${isOpen ? "grid" : "none"};
        }
        @media (min-width: 767px) {
          .hamburger {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

export default Hamburger;
