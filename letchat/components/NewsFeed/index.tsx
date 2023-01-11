import { Card } from "../../utils";

const NewsFeed = () => {
  return (
    <>
      <Card className="bg-light-primary opacity-70">
        <div className="card-body shadow-xl">
          <div className="bg-primary">
            <h2 className="card-title">News Feed</h2>
            <p>01.01.2023</p>
          </div>

          <div className="">
            <div className="">
              <p>Lisa Landlord</p>
              <p>Response: Mold under sink</p>
              <p>09:00 - 25.12.2022</p>
            </div>
            <div className="">
              <p>Lisa Landlord</p>
              <p>Status Update: Out of the country</p>
              <p>09:00 - 25.12.2022</p>
            </div>
            <div className="">
              <p>Lisa Landlord</p>
              <p>Message: Scheduled inspection</p>
              <p>09:00 - 25.12.2022</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default NewsFeed;
