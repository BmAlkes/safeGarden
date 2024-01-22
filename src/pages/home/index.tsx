import Cookies from "@/components/cookies";
import BackgroundSlider from "../../components/backgroundSlider";
import Header from "../../components/header";
import { useState } from "react";

const Home = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Header />
      <BackgroundSlider />
      <Cookies open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Home;
