import RingsIcon from "../../assets/icons/marriage.png"

type IntroProps = {
  names: string;
}

const Intro = (props: IntroProps) => {

  const { names } = props;

  return (
    <div className="intro">
      <div className="icon-container">
        <img className="icon" src={RingsIcon} alt="Dove Icon" />
      </div>
      <h1 className="title decorative">{names}</h1>
    </div>
  );
};

export default Intro;
