import Layout from "../components/Layout";

import Logo from "../assets/react.svg";

const Home = () => {
  return (
    <Layout>
      <div className="text-text1 text-[36px] font-bold">
        <h1>Test Home</h1>
        <img className="w-36 h-36" src={Logo} alt="logoReact.svg" />
      </div>
    </Layout>
  );
};

export default Home;
