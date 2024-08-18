import { Banner } from "app/components/Ui/Banner";

export default function Overview() {
  return (
    <div className="research_page">
      <Banner
        heading={"Overview"}
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 100%, rgba(48, 48, 114, 0) 100%)`}
        subMenu={"Capabilities"}
        extra="white_head process_top_banner"
      />
      <div className="container-fluid">
        <div className="project_mgt_content">
          <p>
            At AAPharmaSyn, we specialize in providing comprehensive synthetic
            chemistry services tailored to meet the needs of pharmaceutical and
            biotechnology clients globally. Our expertise spans the entire
            spectrum of synthetic organic chemistry, from initial molecule
            design to complex multi-step synthesis.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="page_shadow_box">
          <p>
            Explore our capabilities and discover how AAPharmaSyn can support
            your chemistry needs with precision, innovation, and reliability.
            Contact us today to learn more about our services and how we can
            help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
}
