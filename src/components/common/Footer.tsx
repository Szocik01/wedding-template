
type FooterProps = {
    numbers:{
        bridePhoneNumber: string;
        groomPhoneNumber: string;
    }
};


const Footer = (props:FooterProps) => {

    const {bridePhoneNumber, groomPhoneNumber} = props.numbers;

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 mb-5 mb-sm-0">
            <h3>Mapa strony</h3>
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
              <a href="#contact" className="nav-link">
                Kontakt
              </a>
            </div>
            <div className="nav-item">
              <a href="#when-and-where" className="nav-link">
                Gdzie i kiedy
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <h3>Masz pytania?</h3>
            <div className="number-entry">
                <span className="title">Numer Pani młodej</span>
                <span className="number">{bridePhoneNumber}</span>
            </div>
            <div className="number-entry">
                <span className="title">Numer Pana młodego</span>
                <span className="number">{groomPhoneNumber}</span>
             </div>   
          </div>
          <div className="col-12 attribution mt-5">
            <a
              href="https://www.flaticon.com/free-icons/marriage"
              title="marriage icons"
            >
              Marriage icons created by Freepik - Flaticon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
