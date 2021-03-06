import React, { useState } from "react";
import cloud from "../assets/cloud.png";
import skills from "../shared/skills.js";
import GitCurveWithCircle from "../shared/GitCurveWithCircle";
import GitBranchWithPerson from "../shared/GitBranchWithPerson";
import CloudAndSun from "../shared/CloudAndSun";
import GitCurve from "../shared/GitCurve";
import GitCurveReversedSVG from "../shared/GitCurveReversedSVG";
import PersonSVG from "../shared/PersonSVG";
import ExperienceSVG from "../shared/ExperienceSVG";
import GitBranch from "../shared/GitBranch";
import Circle from "../shared/Circle";

const About = () => {
  // onClickHandler to display text about skill
  // onClick -> should:
  // 1. add a class to allow for inputto be white
  // 2. appropriate text should fade in for the specific skill

  // storing value of each skill in 1 state
  // update each value as true or false
  const [skillChecked, setSkillChecked] = useState({
    "1": true,
    "2": false,
    "3": false,
    "4": false
  });
  // const [skillTwoChecked, setSkillTwoChecked] = useState(false);
  // const [skillThreeChecked, setSkillThreeChecked] = useState(false);
  // const [skillFourChecked, setSkillFourChecked] = useState(false);

  // const radios = document.getElementsByTagName("input");
  // // console.log(radios);
  // for (let i = 0; i < radios.length; i++) {
  //   if (radios[i].type === "radio" && radios[i].checked) {
  //   }
  // }
  const showSkillHandler = (e) => {
    if (e.target.checked) {
      // if (e.target.id === "skill 1") {
      //   setSkillOneChecked(!skillOneChecked);
      // }
      switch (e.target.id) {
        case "skill 1":
          setSkillChecked({ "1": true, "2": false, "3": false, "4": false });
          break;
        case "skill 2":
          setSkillChecked({ "1": false, "2": true, "3": false, "4": false });
          break;
        case "skill 3":
          setSkillChecked({ "1": false, "2": false, "3": true, "4": false });
          break;
        case "skill 4":
          setSkillChecked({ "1": false, "2": false, "3": false, "4": true });
          break;
        default:
          break;
      }
    }
  };

  // map method for the skills
  // should fetch the skills or use from a shared data file
  const arrSkills = skills();

  const mapSkills = (item, index) => {
    // use checkbox/radio buttons to allow for switching of state
    if (index === 0) {
      return (
        <li className="skill">
          <input
            type="radio"
            id={`skill ${index + 1}`}
            name="skill"
            value={`${index + 1}. ${item}`}
            onClick={showSkillHandler}
            defaultChecked
          />
          <label for={`skill ${index + 1}`}> {`${index + 1}. ${item}`} </label>
          <br />
        </li>
      );
    } else {
      return (
        <li className="skill">
          <input
            type="radio"
            id={`skill ${index + 1}`}
            name="skill"
            value={`${index + 1}. ${item}`}
            onClick={showSkillHandler}
          />
          <label for={`skill ${index + 1}`}> {`${index + 1}. ${item}`} </label>
          <br />
        </li>
      );
    }
    // <Button
    //   className={`btn skill ${index}`}
    //   onClickHandler={showSkillHandler}
    //   text={`${index + 1}. ${item}`}
    //   type="button"
    // />
  };

  return (
    <div className="about center">
      <CloudAndSun />
      <h2 className="about__heading">About Me</h2>

      {/* For the git branch */}
      <GitBranchWithPerson className="fifty" />

      <div className="about__section__one">
        <div className="about__section__one__image">
          <img src={cloud} alt="cloud" width="150" />
        </div>
        <div className="about__section__one__text">
          <p className="about__section__one__text__para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident,
            minima nam dignissimos, eveniet debitis soluta iusto aliquam tempora
            natus odit rem exercitationem maxime, quaerat asperiores voluptatem
            ab animi. Ea, possimus.
          </p>
          <p className="about__section__one__text__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            temporibus voluptas libero voluptatibus, minima numquam! Molestiae
            cum animi enim soluta.
          </p>
          <p className="about__section__one__text__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illo
            perferendis incidunt voluptatibus distinctio molestias?
          </p>
        </div>
      </div>

      <div className="git__branch__container">
        <GitBranch className="fifty" />
        <PersonSVG />
        <h2 className="git__branch__container__content__heading"> Skills </h2>
      </div>

      <div className="git__branch__container flex">
        <GitBranch className="two-hundred" />
        <div className="git__branch__container__content">
          <div className="git__curve">
            <GitCurve />
            <div className="git__branch__container__circle flex">
              <div className="git__branch__container__circle__left">
                <Circle />
                <GitBranch className="hundred git-straight" />
                <GitCurveReversedSVG />
              </div>

              <div className="git__branch__container__circle__middle">
                <ul className="skills__list">{arrSkills.map(mapSkills)}</ul>
              </div>
              <div className="git__branch__circle__right">
                {skillChecked["1"] && (
                  <>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Unde eum obcaecati ratione aliquam officiis repellat
                      perspiciatis officia iusto tenetur. Ut quidem perferendis
                      dolorem aliquam laborum officiis a in quibusdam molestiae.
                    </p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
                {skillChecked["2"] && (
                  <>
                    <p className="git__branch__circle__right__para">Flying</p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
                {skillChecked["3"] && (
                  <>
                    <p className="git__branch__circle__right__para">Three</p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
                {skillChecked["4"] && (
                  <>
                    <p className="git__branch__circle__right__para">Four</p>
                    <p className="git__branch__circle__right__para">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aperiam soluta harum tempora? Eius sunt perspiciatis
                      dolorem laboriosam, enim ex? Illo aspernatur corrupti
                      placeat ipsam fugiat fugit aperiam sit, distinctio id?
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="git__branch__container">
        <ExperienceSVG />
        <h2 className="git__branch__container__content__heading ml-0">
          Experiences
        </h2>
      </div>

      <GitCurveWithCircle />
    </div>
  );
};

export default About;
