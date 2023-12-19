/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-unused-vars */
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, balanceDeduction} = props
  const {value} = denominationsList

  const totalUpdate = () => {
    balanceDeduction(value)
  }

  return (
    <li className="card-list-container">
      <div>
        <button className="btn" type="button" onClick={totalUpdate}>
          {value}
        </button>
      </div>
    </li>
  )
}
export default DenominationItem
