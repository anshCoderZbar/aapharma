import React, { useEffect } from "react";

import banner from "assets/page-banners/whitepaper_detail_banner.jpg";
import "styles/Resources.css";
import { Banner } from "app/components/Ui/Banner";

export default function WhitepaperDetail() {
  useEffect(() => {
    const headings = document.querySelectorAll("h1 h2 h3 h4 h5 h6");
    console.log(headings);
  }, []);

  return (
    <div className="whitepaper_page">
      <Banner
        heading={
          "The Importance of Synthetic Organic Chemistry in Drug Discovery"
        }
        background={`linear-gradient(90deg, rgba(48, 48, 114, 1) 0%, rgba(48, 48, 114, 0) 100%), url(${banner})`}
        extra="single_whitepaper_banner"
      />
      <div className="container-fluid">
        <div className="whitepaper_single_content">
          <p>
            Synthetic organic chemistry plays a pivotal role in drug discovery
            and development, contributing significantly to the creation of new
            therapeutic agents and improving existing medications. Here are
            several key reasons why synthetic organic chemistry is crucial in
            the field of drug discovery:
          </p>
          <p>
            The traditional to drug development often involves designing
            inhibitors that bind to specific proteins to modulate their
            activity. However, some proteins. pe&ulariy those considered
            •undruggable* due to their structure or function. present for this
            approach. PROTACs Offer an alternative strategy by exploiting the
            c*lluJar responsible for protein degradation.
          </p>
          <h2>Here's how PROTACs work:</h2>
          <img src={require("assets/research_tab_1.png")} alt="" />
          <ul>
            <li>
              <strong>Lead Optimization:</strong> Once a geomising lead cound
              has been identified, synthetic organic chemistry is ernpbyed to
              optimize its properties. including potency. sæ:tivitv,
              gharrny:ckinetics. safety Thrc.æh iterative synthesis and
              evaluation, researchers aim to devebp drug canddates with improved
              and reduced side effects.
            </li>
            <li>
              <strong>Lead Optimization:</strong> Once a geomising lead cound
              has been identified, synthetic organic chemistry is ernpbyed to
              optimize its properties. including potency. sæ:tivitv,
              gharrny:ckinetics. safety Thrc.æh iterative synthesis and
              evaluation, researchers aim to devebp drug canddates with improved
              and reduced side effects.
            </li>
            <li>
              <strong>Lead Optimization:</strong> Once a geomising lead cound
              has been identified, synthetic organic chemistry is ernpbyed to
              optimize its properties. including potency. sæ:tivitv,
              gharrny:ckinetics. safety Thrc.æh iterative synthesis and
              evaluation, researchers aim to devebp drug canddates with improved
              and reduced side effects.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
