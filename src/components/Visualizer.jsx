import {useEffect, useState} from "react";
import { subscribe, unsubscribe } from "../events";
import VizCanvas from "./VizCanvas";
import TextControls from './TextControls';
import Faqs from "./Faqs";
import Ideas from './Ideas';
import contentData from '../content';

const alignLeft = {style: "left", value: "29"}; // left
const alignCenter = {style: "center", value: "45.5"}; // center
const alignRight = {style: "right", value: "61.5"}; // right

function Visualizer(props) {

  const [appData, setAppData] = useState({
    firstLine: "",
    secondLine: "",
    thirdLine: "",
    align: {
      style: "center",
      value: "45.5",
    },
  });
  const [appConfig, setAppConfig] = useState({
    firstLinePlaceholder: props.root.dataset.firstLinePlaceholder || "",
    secondLinePlaceholder: props.root.dataset.secondLinePlaceholder || "",
    thirdLinePlaceholder: props.root.dataset.thirdLinePlaceholder || "",
    firstLineDisabled: props.root.dataset.firstLineDisabled || false,
    secondLineDisabled: props.root.dataset.secondLineDisabled || false,
    thirdLineDisabled: props.root.dataset.thirdLineDisabled || false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [appLang, setAppLang] = useState("de");

  useEffect(() => {
    subscribe("showVisualizer", openOverlay);

    const isoAttr = document.querySelector("[id^='attr_engraving_data_']");
    if (isoAttr && isoAttr.value !== "") {
      const isoAttrData = JSON.parse(isoAttr.value);
      if (appConfig.firstLineDisabled) {
        setAppData({...isoAttrData, firstLine: appConfig.firstLinePlaceholder});
      } else {
        setAppData(isoAttrData);
      }
    } else if (appConfig.firstLineDisabled) {
      setAppData({...appData, firstLine: appConfig.firstLinePlaceholder});
    }

    return () => {
      unsubscribe("showVisualizer", closeOverlay);
    }
  },[appConfig.firstLineDisabled, appConfig.firstLinePlaceholder, appData]);

  useEffect(() => {
    const docLang = document.documentElement.lang;
    setAppLang(docLang);
  }, []);

  /*useEffect(() => {
    if (appConfig.firstLineDisabled) setAppData({...appData, firstLine: appConfig.firstLinePlaceholder});
  }, []);*/

  function inputHandler(event) {
    setAppData((prevAppData) => {
      return {
        ...prevAppData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function alignHandler(event) {
    setAppData((prevAppData) => {
      return {
        ...prevAppData,
        align: alignSelector(event.target.value),
      };
    });
  }

  function alignSelector(val) {
    switch (val) {
      case "left":
        return alignLeft;
      case "center":
        return alignCenter;
      case "right":
        return alignRight;
      default:
        return alignCenter;
    }
  }

  function saveData () {
    // stringify appData and close the overlay
    const isoAttr = document.querySelector("[id^='attr_engraving_data_']");
    if (isoAttr) isoAttr.value = JSON.stringify(appData);
    closeOverlay();
  }

  function openOverlay() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }
  function closeOverlay() {
    setOpacity(0);
    setTimeout(() => {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }, 400);
  }

  return (
    isOpen && <div className="engraver" style={{opacity: opacity}}>
      <div className="engraver-overlay-bg"></div>
        <div className="container engraver-overlay -color-inverted">
          <div className="row engraver-title">
            <div className='col-12'>
              <h3>{appLang === "de" ? contentData.de.title : contentData.en.title}</h3>
              <button type="button" className="engraver-close-button -tertiary" aria-hidden="false" aria-label="Close" onClick={closeOverlay}>X</button>
            </div>
          </div>
          <div className="row engraver-content">
          <div className="engraver-image col-xs-12 col-md-7">
            <VizCanvas firstLine={appData.firstLine} secondLine={appData.secondLine} thirdLine={appData.thirdLine} align={appData.align} />
          </div>
          <div className="engraver-tools col-xs-12 col-md-5">
            <TextControls
              introText={appLang === "de" ? contentData.de.introText : contentData.en.introText}
              contentData={appLang === "de" ? contentData.de : contentData.en}
              appData={appData}
              appConfig={appConfig}
              inputHandler={inputHandler}
              alignHandler={alignHandler}
              saveData={saveData} />
          </div>
          </div>
          <div className="row engraver-ideas">
            <div className="col-12">
              <h3>{appLang === "de" ? contentData.de.ideasHeader : contentData.en.ideasHeader}</h3>
              <Ideas items={appLang === "de" ? contentData.de.ideasData : contentData.en.ideasData} />
            </div>
          </div>
          <div className="row engraver-faqs">
            <div className="col-12">
              <h3>{appLang === "de" ? contentData.de.faqsHeader : contentData.en.faqsHeader}</h3>
              <Faqs items={appLang === "de" ? contentData.de.faqsData : contentData.en.faqsData} />
            </div>
          </div>
        </div>

    </div>
  );
}
export default Visualizer;
