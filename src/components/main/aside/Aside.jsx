import React from "react";

const Aside = () => {
  return (
    <aside className="aside">
      <section className="asideTop">
        <button>Lab Values</button>
      </section>
      <section className="asideCenter">
        <h4>Peer Responses %</h4>
        <figure>
          <label htmlFor="a">A</label>
          <progress id="a" value="80" max="100"></progress>
        </figure>
        <figure>
          <label htmlFor="b">B</label>
          <progress id="b" value="20" max="100"></progress>
        </figure>
        <figure>
          <label htmlFor="c">C</label>
          <progress id="c" value="40" max="100"></progress>
        </figure>
        <figure>
          <label htmlFor="d">D</label>
          <progress id="d" value="50" max="100"></progress>
        </figure>
        <figure>
          <label htmlFor="e">E</label>
          <progress id="e" value="30" max="100">
            30%
          </progress>
        </figure>
        <p className="percentCount">
          <span>0</span>
          <span>20</span>
          <span>40</span>
          <span>60</span>
          <span>80</span>
          <span>100</span>
        </p>
      </section>
      <section className="asideBottom">
        <h4>Session Progress</h4>
        <figure>
          <span>Responses Correct:</span>
          <span>1</span>
        </figure>
        <figure>
          <span>Responses Incorrect:</span>
          <span>1</span>
        </figure>
        <figure>
          <span>Responses Total:</span>
          <span>1</span>
        </figure>
        <figure>
          <span>Responses - % Correct:</span>
          <span>50%</span>
        </figure>
      </section>
    </aside>
  );
};

export default Aside;
