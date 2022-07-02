import React from "react";
import useWindowDimensions from "../utils/dimensionHelper";

const IconCard = ({ src, skillName }) => {
  const { width } = useWindowDimensions();

  let smallImgContainer;
  if (width < 577) {
    smallImgContainer = "smallImgContainer";
  }

  return (
    <div className={`${smallImgContainer} d-flex justify-content-center align-items-center`}>
      <div
        className="d-flex justify-content-center align-items-center m-4  skillWraper"
        style={{
          width: 80,
          height: 80,
        }}
        // style={{ background: `url(${src}) no-repeat center center`, width: 150, height: 150 }}
      >
        {/* <center> */}

        <img
          className="img-fluid skillsImg extraSmallSkillImg"
          src={src}
          alt="icon"
          title={skillName}
        />
        <p className="skillName">{skillName}</p>
        {/* </center> */}
      </div>
    </div>
  );
};

export default IconCard;
