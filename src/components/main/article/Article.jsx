import React, { useState } from "react";
import skip from "./../../../assets/images/Dropdown (2).svg";
import check from "./../../../assets/images/Dropdown.svg";
import checked from "./../../../assets/images/Dropdown (1).svg";

const Article = () => {
  const [answerId, setAnswerId] = useState(null);
  const getcheckedAnswer = e => {
    setAnswerId(e.target.dataset.id);
  };
  const chooseCheckedAnswer = (id, checkedParam, unCheckedParam = "") => {
    return +answerId === id ? checkedParam : unCheckedParam;
  };
  return (
    <article className="article">
      <header>
        <h1>PHYSIOLOGY</h1>
        <p>Question 1 of 99</p>
      </header>
      <section>
        <p className="description">
          A 38-year-old man comes to the physician because of daytime
          sleepiness. He has no significant past medical history except for
          obesity. He has not been able to focus at work or stay awake during
          business meetings. He also complains of occasional headaches in the
          morning. His blood pressure is 160/100 mmHg and pulse is 102/min.
          Other vital signs are within normal limits.
        </p>
      </section>
      <section>
        <p className="question">
          <b>
            Which of the following is most likely to be observed on this
            patient's blood gas analysis?
          </b>
        </p>
      </section>
      <section className="answers">
        <button
          className={chooseCheckedAnswer(1, "active")}
          onClick={getcheckedAnswer}
          data-id="1"
        >
          <img src={chooseCheckedAnswer(1, checked, check)} alt="chack" />
          <b>Blood pH of 7.43</b>
        </button>
        <button
          className={chooseCheckedAnswer(2, "active")}
          onClick={getcheckedAnswer}
          data-id="2"
        >
          <img src={chooseCheckedAnswer(2, checked, check)} alt="chack" />
          <b>Blood pH of 7.50</b>
        </button>
        <button
          className={chooseCheckedAnswer(3, "active")}
          onClick={getcheckedAnswer}
          data-id="3"
        >
          <img src={chooseCheckedAnswer(3, checked, check)} alt="chack" />
          <b>PCO2 of 55 mmHg</b>
        </button>
        <button
          className={chooseCheckedAnswer(4, "active")}
          onClick={getcheckedAnswer}
          data-id="4"
        >
          <img src={chooseCheckedAnswer(4, checked, check)} alt="chack" />
          <b>PCO2 of 48 mmHg</b>
        </button>
      </section>
      <section className="submiting">
        <button className="prevButton">
          <b>Previous Question</b>
        </button>
        <button className="nextButton">
          <b>Submit Answer</b>
        </button>
      </section>
      <section className="skip">
        <b>Skip Question</b>
        <img src={skip} alt="skip" className="dropDownIcon" />
      </section>
    </article>
  );
};

export default Article;
