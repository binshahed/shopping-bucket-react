import brandLogo from "../../assets/brand-logo/brand-logo.svg";
import moreMenu from "../../assets/icons/more-menu.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";
import printerIconWhite from "../../assets/icons/printer-white-icon.png";
import leftArrowIcon from "../../assets/icons/left-arrow-icon.png";
import rightArrowIcon from "../../assets/icons/right-arrow-icon.png";
import downArrowIconWhite from "../../assets/icons/down-arrow-white-icon.png";

const BucketsDetailPage = () => {
  return (
    <div>
      {/* <!-- Navigation Section Starts --> */}
      <nav className="nav">
        <div className="container nav__container">
          <div className="nav__brand">
            <img
              className="nav__brand-logo"
              src={brandLogo}
              alt="Brand-Logo"
              className="nav__brand-logo"
            />
            <h1 className="nav__brand-name">Stack Shopping Details Page</h1>
          </div>
          <div className="nav__menu">
            <div className="nav__menu-items">
              <img className="nav__menu-icon" src={moreMenu} alt="More Menu" />
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Navigation Section Ends --> */}
      {/* <!-- Main Page Content Starts Here --> */}
      <main className="container">
        {/* <!-- Add Item Section Starts Here --> */}
        <div className="add-item__relative">
          <div className="section add-item">
            <div className="add-item__input">
              <img
                src={plusIcon}
                alt="Create New Bucket"
                className="add-item__icon"
              />
              <input
                type="text"
                className="add-item__input-field"
                placeholder="Add New item to Bucket"
              />
            </div>
            <div className="horizontal-line"></div>
            {/* <!-- Add from Sugesstion Section Starts Here --> */}
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
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
                <div className="add-item__sugestions-chip-item">Eggs</div>
              </div>
              <div className="add-item__sugestions-control add-item__sugestions-control--next">
                <img
                  src={rightArrowIcon}
                  alt="Previous"
                  className="add-item__sugestions-control-icon"
                />
              </div>
            </div>
            {/* <!-- Add from Sugesstion Section Ends Here --> */}
            {/* <!-- Add Item Section Starts Ends --> */}
          </div>
          {/* <!-- TODO: Here a Brand New Section will go --> */}
        </div>

        {/* <!-- Item Table --> */}
        <section className="section table __shaddow--sm">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th className="align-right">Actions</th>
              </tr>
              <tbody className="table__tbody">
                <tr>
                  <th>
                    <div className="table__item-name">
                      <input type="checkbox" name="" id="carrot" />
                      <label for="carrot">Carrots</label>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                        aria-placeholder="500G"
                      >
                        2Kg
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                      >
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
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        alt="Delete"
                      />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div className="table__item-name">
                      <input type="checkbox" name="" id="carrot" />
                      <label for="carrot">Carrots</label>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                        aria-placeholder="500G"
                      >
                        2Kg
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                      >
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
                        // eslint-disable-next-line react/jsx-no-duplicate-props
                        alt="Delete"
                      />
                    </button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div className="table__item-name">
                      <input type="checkbox" name="" id="carrot" />
                      <label for="carrot">Carrots</label>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                        aria-placeholder="500G"
                      >
                        2Kg
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                      >
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
                      <label for="carrot">Carrots</label>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                        aria-placeholder="500G"
                      >
                        2Kg
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="table__item-input">
                      <span
                        className="auto-grow-input"
                        role="textbox"
                        contenteditable
                      >
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
            </thead>
          </table>
        </section>
        {/* <!-- Success Table Starts Here --> */}
        <section className="section table table--success __shaddow--sm">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Cost</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={printerIconWhite}
                      alt="Print"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      className="icon-button__icon"
                      src={downArrowIconWhite}
                      alt="Collapse"
                    />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              <tr>
                <th>
                  <div className="table__item-name">
                    <input type="checkbox" name="" id="carrot" />
                    <label for="carrot">Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                      aria-placeholder="500G"
                    >
                      2Kg
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
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
                    <label for="carrot">Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                      aria-placeholder="500G"
                    >
                      2Kg
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
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
                    <label for="carrot">Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                      aria-placeholder="500G"
                    >
                      2Kg
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
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
                    <label for="carrot">Carrots</label>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                      aria-placeholder="500G"
                    >
                      2Kg
                    </span>
                  </div>
                </th>
                <th>
                  <div className="table__item-input">
                    <span
                      className="auto-grow-input"
                      role="textbox"
                      contenteditable
                    >
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
        </section>
        {/* <!-- Success Table Starts Ends --> */}
      </main>
    </div>
  );
};

export default BucketsDetailPage;
