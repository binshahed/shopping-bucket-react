import Suggestion from "../Suggestion/Suggestion";
import { icons } from "../../assets/assets";

const Create = ({ value, placeholder, onChange, onKeyPress, label, extra }) => {
  return (
    <div className="add-item__relative">
      <div className="section add-item">
        <div className="add-item__input">
          <img src={icons.plusIcon} alt={label} className="add-item__icon" />
          <input
            type="text"
            className="add-item__input-field"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>

        <div className="horizontal-line"></div>
        {/* <!-- Add from Suggestion Section Starts Here --> */}
        {extra && <Suggestion />}
        {/* <!-- Add from Suggestion Section Ends Here --> */}
        {/* <!-- Add Item Section Starts Ends --> */}
      </div>
      {/* <!-- TODO: Here a Brand New Section will go --> */}
    </div>
  );
};

export default Create;
