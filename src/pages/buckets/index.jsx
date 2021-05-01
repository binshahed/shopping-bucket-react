import Nav from "../../Components/Nav/Nav";
import Create from "../../Components/Create/Create";
import Table from "../../Components/Table/Table";
import { brand, icons } from "../../assets/assets";

const BucketPage = () => {
  return (
    <div>
      <Nav
        brandLogo={brand.brandLogo}
        name="Shopping Bucket"
        showMenu
        moreMenu={icons.moreMenuIcon}
      />

      <main className="container">
        <Create label="Create New Bucket" />

        <div className="section table">
          <Table />
        </div>
      </main>
    </div>
  );
};

export default BucketPage;
