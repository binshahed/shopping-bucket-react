import useShoppingItems from "../../app/hooks/useShoppingItem";
import leftArrowIcon from "../../assets/icons/left-arrow-icon.png";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.png";

const Suggestion = () => {
  const { createItem, getSuggestions } = useShoppingItems;
  const handleClick = (sug) => {
    createItem(sug.text, sug);
  };
  const suggestions = getSuggestions;

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
        {suggestions.length > 0 &&
          suggestions.map((sug) => {
            <div
              key={sug.id}
              className="add-item__sugestions-chip-item"
              onClick={() => handleClick(sug)}
            >
              {sug.text}
            </div>;
          })}
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
