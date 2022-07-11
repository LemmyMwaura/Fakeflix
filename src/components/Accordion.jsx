import { useState } from "react"
import { questionAndAnswers } from "../utils/Faq"

import { HiOutlinePlus } from "react-icons/hi"
import { GrNext } from "react-icons/gr"

const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null)
    }

    setSelected(index)
  }

  return (
    <div className="accordion-wrapper">
      <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {questionAndAnswers.map((item, index) => {
          return (
            <div
              className={`item-wrapper ${selected === index && "show"}`}
              key={item.id}
              onClick={() => toggle(index)}
            >
              <div className={`question ${selected === index && "show"}`}>
                <h3>{item.question}</h3>
                <HiOutlinePlus
                  className={`accordion-tooltip ${
                    selected === index && "show"
                  }`}
                />
              </div>
              <div className={`answer ${selected === index && "show"}`}>
                {item.answer}
              </div>
            </div>
          )
        })}
      </div>
      <div className="accordion-footer">
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <div className="accordion-input">
          <input type="text" placeholder="Email address" />
          <button className="accordion-btn">
            <span>Get Started</span>
            <GrNext className="accordion-icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Accordion
