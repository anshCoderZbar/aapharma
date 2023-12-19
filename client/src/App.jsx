import { AllRoutes } from "routes";
import { useEffect } from "react";
import "swiper/css";
import { GetSettings } from "rest/main";
import { useAtom } from "jotai";
import { allSettings } from "store/SettingsStore";
import "./App.css";

function App() {
  const settings = GetSettings();
  const [_, setAllDetails] = useAtom(allSettings);

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.js");
  }, []);

  useEffect(() => {
    setAllDetails(settings?.data?.data);
  }, [settings?.data?.data]);

  return <AllRoutes />;
}

export default App;
