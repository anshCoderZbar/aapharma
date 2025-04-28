import React, { useRef, useEffect, useState } from "react";
import Miew from "miew";
import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";
import "styles/ketcher.css";

window.Miew = Miew;

const structServiceProvider = new StandaloneStructServiceProvider();

export const EditorComponent = ({
  setCurrentMolecule,
  setImg,
  initialMolecule,
  initialSmilie,
  setCurrentSmilie,
}) => {
  const ketcherRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const handleOnInit = async (ketcher) => {
    ketcherRef.current = ketcher;
    window.ketcher = ketcher;

    const initialData = `\n${initialMolecule}`;

    ketcher.setMolecule(initialData);
  };

  useEffect(() => {
    if (ketcherRef.current) {
      handleOnInit(ketcherRef.current);
    }
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [initialMolecule]);

  // useEffect(() => {
  //   setInterval(async () => {
  //     const updatedMolecule = await ketcherRef.current.getMolfile();
  //     const updatedSmiles = await ketcherRef.current.getSmiles();
  //     setCurrentMolecule(
  //       updatedMolecule.length >= 1 ? updatedMolecule : initialMolecule
  //     );
  //     setCurrentSmilie(
  //       updatedSmiles.length >= 1 ? updatedSmiles : initialSmilie
  //     );

  //     if (updatedMolecule) {
  //       let promise = await ketcherRef.current.generateImage(updatedMolecule);
  //       setImg(promise);
  //     }
  //   }, 1000);
  // }, [setCurrentMolecule, setCurrentSmilie, setImg]);

  const save = async () => {
    const updatedMolecule = await ketcherRef.current.getMolfile();
    const updatedSmiles = await ketcherRef.current.getSmiles();
    setCurrentMolecule(
      updatedMolecule.length >= 1 ? updatedMolecule : initialMolecule
    );
    setCurrentSmilie(updatedSmiles.length >= 1 ? updatedSmiles : initialSmilie);

    if (updatedMolecule) {
      let promise = await ketcherRef.current.generateImage(updatedMolecule);
      setImg(promise);
    }
  };

  return (
    <>
      <div className={` chem_load ${loading ? "d-flex" : "d-none"}`}>
        <div className="i-loader-inf-horizontal-container">
          <div className="i-loader-inf-horizontal"></div>
          <div className="pt-8px">
            <span>Please Wait Until editor load</span>
          </div>
        </div>
      </div>
      <div className={`${loading ? "invisible height_0" : "visible"} `}>
        <Editor
          staticResourcesUrl={""}
          structServiceProvider={structServiceProvider}
          onInit={handleOnInit}
        />
      </div>

      <button className="input_submit" onClick={save}>
        save
      </button>
    </>
  );
};
