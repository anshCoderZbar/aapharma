import React, { useRef, useEffect, useState } from "react";
import Miew from "miew";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
// import "ketcher-react/dist/index.css";
// import "styles/Catalog.css";
import "styles/Ketcher.css";
import "styles/Catalog.css";
import { ChemicalsFilterExact, FilterChemical } from "rest/catalog";
import { ButtonLoader } from "app/components/Ui/ButtonLoader";
window.Miew = Miew;

const structServiceProvider = new StandaloneStructServiceProvider();

export const ChemicalEditor = () => {
  const filterChemical = FilterChemical();
  const exactMatchChemical = ChemicalsFilterExact();
  const ketcherRef = useRef(null);
  const [currentMolecule, setCurrentMolecule] = useState("");
  const [loading, setLoading] = useState(true);

  const handleOnInit = async (ketcher) => {
    ketcherRef.current = ketcher;
    window.ketcher = ketcher;

    const initialData = `\n `;

    ketcher.setMolecule(initialData);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    setInterval(async () => {
      const updatedMolecule = await ketcherRef.current.getSmiles();
      setCurrentMolecule(updatedMolecule);
    }, 1000);
  }, [setCurrentMolecule]);

  const handleSearchMolecule = () => {
    sessionStorage.setItem("search", currentMolecule);
    filterChemical.mutate();
  };

  const handleExactMolecule = () => {
    const formData = new FormData();
    sessionStorage.setItem("search", currentMolecule);
    formData.append("search", sessionStorage.getItem("search"));
    exactMatchChemical.mutate(formData);
  };

  return (
    <>
      <div className={`chem_load ${loading ? "d-flex" : "d-none"}`}>
        <div className="i-loader-inf-horizontal-container">
          <div className="i-loader-inf-horizontal"></div>
          {/* <div className="pt-8px">
            <span>Please Wait Until editor load</span>
          </div> */}
        </div>
      </div>
      <div className={`${loading ? "invisible height_0" : "visible"} `}>
        <div className="container-fluid">
          <div className="chem_editor_heading">
            <h2>Draw Structure</h2>
            <div className="submit_btn d-flex gap-1">
              {filterChemical?.isPending ? (
                <ButtonLoader />
              ) : (
                <button onClick={handleSearchMolecule}>Similar Result</button>
              )}
              {exactMatchChemical?.isPending ? (
                <ButtonLoader />
              ) : (
                <button onClick={handleExactMolecule}>Exact Result</button>
              )}
            </div>
          </div>
          <div className="chemicl_he">
            <Editor
              staticResourcesUrl={""}
              structServiceProvider={structServiceProvider}
              onInit={handleOnInit}
            />
          </div>
        </div>
      </div>
    </>
  );
};
