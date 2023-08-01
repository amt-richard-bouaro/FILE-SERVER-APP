import { FEEDBACK_TYPE } from "./types";


const Feedback = (props:FEEDBACK_TYPE) => {
  return (
    <div className={`feedback-container mg-t-20 ${props.type}`}  >
       {props.message}
      </div>
  )
}

export default Feedback;