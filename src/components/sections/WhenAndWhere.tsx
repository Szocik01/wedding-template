import CakeIcon from "../../assets/icons/cake.png";
import ChurchIcon from "../../assets/icons/church.png";

type InfoEntry = {
  name: string;
  date: string;
  time: string;
  location: string;
  contact: string;
};

type WhenAndWhereProps = {
  ceremony: InfoEntry;
  reception: InfoEntry;
};

const WhenAndWhere = (props: WhenAndWhereProps) => {
  const { ceremony, reception } = props;

  return (
    <div className="when-and-where">
      <div className="row">
        <div className="col-12 col-lg-5 order-2 order-lg-1">
          <div id="location-map-root" style={{ width: "100%" }}>
            tu jest root dla mapy
          </div>
        </div>
        <div className="col-12 col-lg-7 order-1 order-lg-2">
          <h2 className="title decorative mb-5">Gdzie i Kiedy</h2>
          <div className="events-container">
            <div className="event-entry mb-5 mb-xl-0">
              <div className="icon-container">
                <img src={ChurchIcon} alt="" />
              </div>
              <div className="info">
                <div className="name">{ceremony.name}</div>
                <div className="date">{ceremony.date}</div>
                <div className="time">{ceremony.time}</div>
                <div className="location">{ceremony.location}</div>
                <div className="number">{ceremony.contact}</div>
              </div>
            </div>
            <div className="event-entry mb-5 mb-xl-0">
              <div className="icon-container">
                <img src={CakeIcon} alt="" />
              </div>
              <div className="info">
                <div className="name">{reception.name}</div>
                <div className="date">{reception.date}</div>
                <div className="time">{reception.time}</div>
                <div className="location">{reception.location}</div>
                <div className="number">{reception.contact}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhenAndWhere;
