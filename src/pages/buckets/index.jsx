
import Nav from "../../Components/Nav/Nav";
import Create from "../../Components/Create/Create";
import Table from "../../Components/Table/Table";

const BucketPage = () => {
  return (
    <div>
      <Nav/>
      
      {/* <!-- Navigation Section Ends Here -->
        <!-- Main Section Content Starts Here --> */}
      <main className="container">
        {/* <!-- Add Item Section Starts --> */}
          <Create label="Create New Bucket"/>
        {/* <!-- Add Item Section Ends -->
            <!-- Bucket List Table Section Starts--> */}
        <div className="section table">
         <Table/>
        </div>
        {/* <!-- Bucket List Table Section Ends--> */}
      </main>
      {/* <!-- Main Section Content Ends Here --> */}
    </div>
  );
};

export default BucketPage;
