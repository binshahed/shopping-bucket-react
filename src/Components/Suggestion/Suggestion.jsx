import leftArrowIcon from "../../assets/icons/left-arrow-icon.png";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.png";

const Suggestion = () => {
    return (
        <div className="add-item__sugestions">
        <div className="add-item__sugestions-control add-item__sugestions-control--prev">
          <img
            src={leftArrowIcon}
            alt="Previous"
            className="add-item__sugestions-control-icon"
          />
        </div>
        <div className="add-item-sugestions-chips">
          <div className="add-item__sugestions-chip-item">Eggs</div>
          <div className="add-item__sugestions-chip-item">Milk</div>
          <div className="add-item__sugestions-chip-item">Apple</div>
          <div className="add-item__sugestions-chip-item">coke</div>
          <div className="add-item__sugestions-chip-item">Water</div>
          <div className="add-item__sugestions-chip-item">Apple</div>
          <div className="add-item__sugestions-chip-item">Orange</div>
          <div className="add-item__sugestions-chip-item">Banana</div>
          <div className="add-item__sugestions-chip-item">Fish</div>
          <div className="add-item__sugestions-chip-item">Carrot</div>
          <div className="add-item__sugestions-chip-item">Computer</div>
          <div className="add-item__sugestions-chip-item">Mouse</div>
          <div className="add-item__sugestions-chip-item">Key board</div>
          <div className="add-item__sugestions-chip-item">Laptop</div>
          <div className="add-item__sugestions-chip-item">Monitor</div>
          <div className="add-item__sugestions-chip-item">Book</div>
          <div className="add-item__sugestions-chip-item">Pen</div>
          <div className="add-item__sugestions-chip-item">Mobile</div>
          <div className="add-item__sugestions-chip-item">Table</div>
          <div className="add-item__sugestions-chip-item">Chair</div>
        </div>
        <div className="add-item__sugestions-control add-item__sugestions-control--next">
          <img
            src={rightArrowIcon}
            alt="Previous"
            className="add-item__sugestions-control-icon"
          />
        </div>
      </div>
    );
};

export default Suggestion;