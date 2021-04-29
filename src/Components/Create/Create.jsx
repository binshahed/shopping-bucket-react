import plusIcon from "../../assets/icons/plus-icon.png";
import Suggestion from "../Suggestion/Suggestion";

const Create = ({ label, extra }) => {
  return (
    <div className="add-item__relative">
      <div className="section add-item">
        <div className="add-item__input">
          <img src={plusIcon} alt={label} className="add-item__icon" />
          <input
            type="text"
            className="add-item__input-field"
            placeholder={label}
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
