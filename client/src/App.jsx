import { useAtom } from "jotai";
import { AllRoutes } from "routes";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { GetSettings } from "rest/main";
import { allSettings } from "store/SettingsStore";
import "./App.css";
import "swiper/css";

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

  useEffect(() => {
    const getGuestId = localStorage.getItem("guestId");
    if (!getGuestId) {
      localStorage.setItem("guestId", uuidv4());
    }
  }, []);

  return <AllRoutes />;
}

export default App;
