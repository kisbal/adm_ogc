import React from "react";

function ModalEdit() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="basicInput">Basic Input</label>
            <input
              type="text"
              className="form-control"
              id="basicInput"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label for="helpInputTop">Input text with help</label>
            <small className="text-muted">
              eg.<i>someone@example.com</i>
            </small>
            <input type="text" className="form-control" id="helpInputTop" />
          </div>

          <div className="form-group">
            <label for="helperText">With Helper Text</label>
            <input
              type="text"
              id="helperText"
              className="form-control"
              placeholder="Name"
            />
            <p>
              <small className="text-muted">
                Find helper text here for given textbox.
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="disabledInput">Disabled Input</label>
            <input
              type="text"
              className="form-control"
              id="disabledInput"
              placeholder="Disabled Text"
              disabled
            />
          </div>
          <div className="form-group">
            <label for="disabledInput">Readonly Input</label>
            <input
              type="text"
              className="form-control"
              id="readonlyInput"
              readonly="readonly"
              value="You can't update me :P"
            />
          </div>

          <div className="form-group">
            <label for="disabledInput">Static Text</label>
            <p className="form-control-static" id="staticInput">
              email@mazer.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalEdit;
