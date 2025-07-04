import React from 'react';

function TextControls(props) {
  return (
    <div className="engraver-text-controls">
      <p>{props.contentData.introText}</p>
      <div className="form-row">
        <label htmlFor="firstLine">Line 1</label>
        <input
          type="text"
          placeholder={props.appConfig.firstLinePlaceholder}
          name="firstLine"
          id="firstLine"
          disabled={props.appConfig.firstLineDisabled}
          onInput={props.inputHandler}
          value={props.appData.firstLine}
          maxLength={16}
        />
      </div>
      <div className="form-row">
        <label htmlFor="secondLine">Line 2</label>
        <input
          type="text"
          placeholder={props.appConfig.secondLinePlaceholder}
          name="secondLine"
          id="secondLine"
          disabled={props.appConfig.secondLineDisabled}
          onInput={props.inputHandler}
          value={props.appData.secondLine}
          maxLength={16}
        />
      </div>
      <div className="form-row">
        <label htmlFor="thirdLine">Line 3</label>
        <input
          type="text"
          placeholder={props.appConfig.thirdLinePlaceholder}
          name="thirdLine"
          id="thirdLine"
          disabled={props.appConfig.thirdLineDisabled}
          onInput={props.inputHandler}
          value={props.appData.thirdLine}
          maxLength={16}
        />
      </div>
      <div className="form-row">
        <fieldset className="radio_container">
          <legend>Ausrichtung</legend>
          <span>
            <input
              type="radio"
              value="left"
              name="align"
              onChange={props.alignHandler}
              checked={props.appData.align.style === "left"}
            />
            <label>Links</label>
          </span>
          <span>
            <input
            type="radio"
            value="center"
            name="align"
            onChange={props.alignHandler}
            checked={props.appData.align.style === "center"}
          />
            <label>Zentriert</label>
          </span>
          <span>
            <input
            type="radio"
            value="right"
            name="align"
            onChange={props.alignHandler}
            checked={props.appData.align.style === "right"}
          />
            <label>Rechts</label>
          </span>
        </fieldset>
      </div>
      <button className="save-button" onClick={props.saveData}>{props.contentData.saveButton}</button>
      <p>{props.contentData.hintHeader} {props.contentData.hintText}</p>
    </div>
  );
}

export default TextControls;
