import { useLoaderData } from "react-router-dom";
import HomepageBanner from "../components/HomepageBanner";
import BrandsCard from "../components/BrandsCard";
import Features from "../components/Features";
import Choose from "../components/Choose";

const Home = () => {
    const allData = useLoaderData();
    // console.log(allData);

  return (
    <div>
      <HomepageBanner></HomepageBanner>
      <div className="min-h-screen">
      <h2 className="text-5xl font-semibold text-center my-8">Choose your favorite brand</h2>
        
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
            {
              allData?.map(item => <BrandsCard key={item._id} item={item}></BrandsCard>)
            }
        </div>
      </div>

      <div>
        <Features></Features>
      </div>
      <div>
        <Choose></Choose>
      </div>
    </div>
  );
};

export default Home;
