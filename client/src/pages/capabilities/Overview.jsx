import { Banner } from "app/components/Ui/Banner";
import { useEffect, useState } from "react";
import {
  AllOverviewTabsMutation,
  GetOverviewBannerMutation,
} from "rest/capabilities";

export default function Overview() {
  const getOverviewBanner = GetOverviewBannerMutation();
  const getAllTabs = AllOverviewTabsMutation();

  return (
    <div className="research_page">
      <Banner
        heading={
          getOverviewBanner?.data?.data &&
          getOverviewBanner?.data?.data?.heading
        }
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu={"Capabilities"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content">
          <p
            dangerouslySetInnerHTML={{
              __html:
                getOverviewBanner?.data?.data &&
                getOverviewBanner?.data?.data?.description,
            }}
          />
        </div>
      </div>
      <div className="max-container">
        <div className="container-fluid">
          <div className="overview_tabs_body">
            {getAllTabs?.data?.data?.length >= 1 &&
              getAllTabs?.data?.data.map((tabs, i) => {
                return <OverviewTabs tabs={tabs} key={i} index={i} />;
              })}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="page_shadow_box">
          <p
            dangerouslySetInnerHTML={{
              __html:
                getOverviewBanner?.data?.data &&
                getOverviewBanner?.data?.data?.footerDescription,
            }}
          />
        </div>
      </div>
    </div>
  );
}

const OverviewTabs = ({ tabs, index }) => {
  const [tab, setTab] = useState(false);

  useEffect(() => {
    index === 0 && setTab(true);
  }, []);

  return (
    <div className="row row-gap-5">
      <div className="col-lg-4">
        <div className="position-relative">
          <button
            onClick={() => setTab(!tab)}
            className={`overview_btn ${tab ? "overview_active_btn" : ""}`}
          >
            {tabs?.heading}
          </button>
          {tab && (
            <img
              src={require("assets/right_arrow.png")}
              alt="arrow"
              className="overview_arrow"
            />
          )}
        </div>
      </div>
      {tab && (
        <div className="col-lg-8">
          <p
            className="overview_text"
            dangerouslySetInnerHTML={{
              __html: tabs.description,
            }}
          />
        </div>
      )}
    </div>
  );
};
