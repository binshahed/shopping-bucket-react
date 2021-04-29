import brandLogo from "../../assets/brand-logo/brand-logo.svg";
import moreMenu from "../../assets/icons/more-menu.png";
import plusIcon from "../../assets/icons/plus-icon.png";
import editIcon from "../../assets/icons/edit-icon.png";
import deleteIcon from "../../assets/icons/delete-icon.png";
import printerIcon from "../../assets/icons/printer-icon.png";

const BucketPage = () => {
  return (
    <div>
      <nav className="nav">
        <div className="container nav__container">
          <div className="nav__brand">
            <img
              className="nav__brand-logo"
              src={brandLogo}
              alt="Brand-Logo"
              className="nav__brand-logo"
            />
            <h1 className="nav__brand-name">Stack Shopping</h1>
          </div>
          <div className="nav__menu">
            <div className="nav__menu-items">
              <img className="nav__menu-icon" src={moreMenu} alt="More Menu" />
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Navigation Section Ends Here -->
        <!-- Main Section Content Starts Here --> */}
      <main className="container">
        {/* <!-- Add Item Section Starts --> */}
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
              placeholder="Create New Bucket"
            />
          </div>
        </div>
        {/* <!-- Add Item Section Ends -->
            <!-- Bucket List Table Section Starts--> */}
        <div className="section table">
          <table className="table__table">
            <thead className="table__thead">
              <tr>
                <th>Shopping Lists</th>
                <th>Date</th>
                <th>Costs</th>
                <th className="custom-th">Actions</th>
              </tr>
            </thead>
            <tbody className="table__tbody">
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">4 April, 2020</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={deleteIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={printerIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">4 April, 2020</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={deleteIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={printerIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">4 April, 2020</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={deleteIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={printerIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">4 April, 2020</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={deleteIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={printerIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                </th>
              </tr>
              <tr>
                <th>Holiday Shopping</th>
                <th className="text-secondary">4 April, 2020</th>
                <th>4850 BDT</th>
                <th className="align-right">
                  <button className="icon-button">
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={deleteIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                  <button className="icon-button">
                    <img
                      src={printerIcon}
                      alt="Edit"
                      className="icon-button__icon"
                    />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Bucket List Table Section Ends--> */}
      </main>
      {/* <!-- Main Section Content Ends Here --> */}
    </div>
  );
};

export default BucketPage;
