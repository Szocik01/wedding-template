import Groom from "../../assets/images/groomtmp.webp";
import Bride from "../../assets/images/bridetmp.webp";
import Dove from "../../assets/icons/dove.png";
import { useEffect, useRef } from "react";

type EntryProps = {
  name: string;
  description: string;
};

type BrideAndGroomProps = {
  groom: EntryProps;
  bride: EntryProps;
};

const BrideAndGroom = (props: BrideAndGroomProps) => {
  const { groom, bride } = props;

  const brideGroomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );
    if (brideGroomRef.current) {
      intersectionObserver.observe(brideGroomRef.current);
    }
  }, []);

  return (
    <div className="bride-groom" ref={brideGroomRef}>
      <div className="row">
        <div className="col-12">
          <h2 className="title decorative mb-5">Państwo Młodzi</h2>
        </div>
        <div className="col-12 mb-5">
          <div className="info-entry">
            <div className="image">
              <img src={Groom} alt="" />
            </div>
            <div className="data">
              <div className="name decorative mt-4">{groom.name}</div>
              <div className="info">{groom.description}</div>
              <div className="icon">
                <img src={Dove} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="info-entry reverse">
            <div className="image">
              <img src={Bride} alt="" />
            </div>
            <div className="data">
              <div className="name decorative mt-4">{bride.name}</div>
              <div className="info">{bride.description}</div>
              <div className="icon">
                <img src={Dove} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrideAndGroom;
