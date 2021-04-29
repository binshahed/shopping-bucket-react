import { Router } from "@reach/router";
import BucketPage from "../pages/buckets";
import BucketsDetailPage from "../pages/buckets-details";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <Router>
      <BucketPage path="/" />
      <BucketsDetailPage path="/buckets/:bucketID" />
      <NotFound default />
    </Router>
  );
};

export default AppRouter;
