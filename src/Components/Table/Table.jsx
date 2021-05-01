import deleteIcon from "../../assets/icons/delete-icon.png";


const Table = () => {
  return (
    <table className="table__table">
      <thead className="table__thead">
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Cost</th>
          <th className="align-right">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="table__tbody">
        <tr>
          <th>
            <div className="table__item-name">
              <input type="checkbox" name="" id="carrot" />
              <label >Carrots</label>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span
                className="auto-grow-input"
                role="textbox"
                
                aria-placeholder="500G"
              >
                2Kg
              </span>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span className="auto-grow-input" role="textbox" >
                250
              </span>
              <span> BDT </span>
            </div>
          </th>
          <th className="align-right">
            <button className="icon-button icon-button--custom">
              <img
                alt=""
                className="icon-button__icon"
                src={deleteIcon}
                alt="Delete"
              />
            </button>
          </th>
        </tr>
        <tr>
          <th>
            <div className="table__item-name">
              <input type="checkbox" name="" id="carrot" />
              <label >Carrots</label>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span
                className="auto-grow-input"
                role="textbox"
                
                aria-placeholder="500G"
              >
                2Kg
              </span>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span className="auto-grow-input" role="textbox" >
                250
              </span>
              <span> BDT </span>
            </div>
          </th>
          <th className="align-right">
            <button className="icon-button icon-button--custom">
              <img
                alt=""
                className="icon-button__icon"
                src={deleteIcon}
                alt="Delete"
              />
            </button>
          </th>
        </tr>
        <tr>
          <th>
            <div className="table__item-name">
              <input type="checkbox" name="" id="carrot" />
              <label >Carrots</label>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span
                className="auto-grow-input"
                role="textbox"
                
                aria-placeholder="500G"
              >
                2Kg
              </span>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span className="auto-grow-input" role="textbox" >
                250
              </span>
              <span> BDT </span>
            </div>
          </th>
          <th className="align-right">
            <button className="icon-button icon-button--custom">
              <img
                alt=""
                className="icon-button__icon"
                src={deleteIcon}
                alt="Delete"
              />
            </button>
          </th>
        </tr>
        <tr>
          <th>
            <div className="table__item-name">
              <input type="checkbox" name="" id="carrot" />
              <label>Carrots</label>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span
                className="auto-grow-input"
                role="textbox"
                
                aria-placeholder="500G"
              >
                2Kg
              </span>
            </div>
          </th>
          <th>
            <div className="table__item-input">
              <span className="auto-grow-input" role="textbox" >
                250
              </span>
              <span> BDT </span>
            </div>
          </th>
          <th className="align-right">
            <button className="icon-button icon-button--custom">
              <img
                alt=""
                className="icon-button__icon"
                src={deleteIcon}
                alt="Delete"
              />
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
