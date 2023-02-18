import Sidebar from "../components/Sidebar";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex">
        <Sidebar />
        <div className="text-text2 text-[36px] font-bold">TEST HOME</div>
      </div>
    </Layout>
  );
};

export default Home;
