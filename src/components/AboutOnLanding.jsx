import React from "react";
import sun from "../assets/sun.png";
import cloud from "../assets/cloud.png";
import Button from "../shared/Button";

const AboutOnLanding = () => {
  const onClickHandler = () => {};
  return (
    <div className="about">
      <div className="cloud-and-sun">
        <img class="cloud" src={cloud} alt="cloud" />
        <img class="sun" src={sun} alt="sun" />
      </div>
      <div className="about__heading">
        <h2> About Me </h2>
      </div>
      <div className="about__image-with-text">
        <div className="about__image">
          <img src={sun} alt="sun" />
        </div>
        <div className="about__text">
          <h3 className="about__text__heading">Lorem ipsum dolor sit amet. </h3>
          <p className="about__text__para">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            laboriosam ullam perferendis inventore ducimus, delectus commodi
            voluptatibus rem culpa, quo assumenda iure voluptate possimus
            necessitatibus aut repellat molestiae dicta cumque?{" "}
          </p>
        </div>
      </div>
      <div className="about__btn">
        <Button
          type="submit"
          className="btn btn-about"
          onClickHandler={onClickHandler}
          text="Lorem ipsum"
        />
      </div>
    </div>
  );
};

export default AboutOnLanding;