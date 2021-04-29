
import Nav from "../../Components/Nav/Nav";
import Create from "../../Components/Create/Create";
import Table from "../../Components/Table/Table";

const BucketsDetailPage = () => {
  return (
    <div>
      {/* <!-- Navigation Section Starts --> */}
      <Nav />

      <main className="container">
        {/* create new item */}
        <Create extra label="Add New Item" />

        {/* <!-- Item Table --> */}
        <section className="section table __shaddow--sm">
        <Table/>
        </section>
        {/* <!-- Success Table Starts Here --> */}
        <section className="section table table--success __shaddow--sm">
         <Table/>
        </section>
        {/* <!-- Success Table Starts Ends --> */}
      </main>
    </div>
  );
};

export default BucketsDetailPage;
