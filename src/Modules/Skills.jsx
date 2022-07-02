import React from "react";
import { Container, Row } from "react-bootstrap";
import IconCard from "../Components/IconCard";
import { frontSkillsList, backSkillsList } from "../utils/helperList";
import useWindowDimensions from "../utils/dimensionHelper";

const Skills = () => {
  const { width } = useWindowDimensions();

  let imgContainerWidthClass;
  let headingMargin;
  if (width < 577) {
    imgContainerWidthClass = "textCenter";
  }
  if (width > 577) {
    headingMargin = "headingMargin";
  }

  return (
    <>
      
      <Container className={`mt-5 ${imgContainerWidthClass}  `}>
        <h2 className={`color-customBlue text-boldest ${headingMargin}`}>
          Front End
        </h2>
        <Row xs={1} sm={2} md={3} lg={4} >
          {frontSkillsList.map((s) => (
            <IconCard key={s.label} src={s.src} skillName={s.label} />
          ))}
        </Row>
      </Container>

      <Container className={`mt-5 ${imgContainerWidthClass}  `}>
        <h2 className={`color-customBlue text-boldest ${headingMargin}`}>
          Back End
        </h2>
        <Row xs={1} sm={2} md={3} lg={4}>
          {backSkillsList.map((s) => (
            <IconCard key={s.label} src={s.src} skillName={s.label} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Skills;
