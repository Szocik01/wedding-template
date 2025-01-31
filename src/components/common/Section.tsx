import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  backgroundImageUrl?: string;
  secondary?: boolean;
  overlay?: boolean;
  sectionId: string;
}>;

const Section = (props: SectionProps) => {
  const { backgroundImageUrl, secondary, children, overlay, sectionId } = props;

  return (
    <div
      id={sectionId}
      className={`section ${secondary ? "secondary" : ""}`}
      style={
        backgroundImageUrl
          ? { backgroundImage: `url(${backgroundImageUrl})` }
          : undefined
      }
    >
      {overlay && <div className="overlay"></div>}
      <div className="container">{children}</div>
    </div>
  );
};

export default Section;
