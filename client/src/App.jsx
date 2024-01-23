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
    if (settings?.data?.data) {
      let link = document.querySelector("link[rel~='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
      }
      link.href = settings?.data?.data?.favicon;
    }
  }, [settings?.data?.data]);

  useEffect(() => {
    sessionStorage.setItem("categoryId", JSON?.stringify([]));
    sessionStorage.setItem("subcategoryId", JSON?.stringify([]));
    sessionStorage.setItem("supersubcategoryId", JSON?.stringify([]));
    sessionStorage.setItem("orderBy", "");
    sessionStorage.setItem("search", "");
  }, []);

  return <AllRoutes />;
}

export default App;
