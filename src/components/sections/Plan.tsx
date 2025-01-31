import { useEffect, useRef } from "react";
import Dove from "../../assets/icons/dove.png";

type PlanProps = {
  planEntries: {
    title: string;
    description: string;
    date: string;
  }[];
};

const Plan = (props: PlanProps) => {
  const { planEntries } = props;

  const planRef = useRef<HTMLDivElement>(null);

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
    if (planRef.current) {
      const planEntries = planRef.current.querySelectorAll(".plan-entry");
      planEntries.forEach((entry) => {
        intersectionObserver.observe(entry);
      });
    }
  }, []);

  return (
    <div className="row">
      <div className="col-12">
        <div className="plan" ref={planRef}>
          <h2 className="title mb-5 decorative">Plan wydarzeń</h2>
          <ul className="plan-entries">
            {planEntries.map((entry, index) => {
              return (
                <li className="plan-entry" key={index}>
                  <div className="icon-container">
                    <img src={Dove} alt="" />
                  </div>
                  <div className="data">
                    <div className="date">{entry.date}</div>
                    <div className="title decorative">{entry.title}</div>
                    <div className="description">{entry.description}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Plan;
