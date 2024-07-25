import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { PasswordWrap } from "./password.styles";
import DeactivateAccount from "../DeactivateAccount";
import Modal from "../../Modal/index";
import DeactivateRequest from "../DeactivateAccount/DeactivateRequest";
const ChangePassword = () => {
  const [deactivate, setDeactivate] = useState(false);
  const [request, setRequest] = useState(false);
  const DeactivateHandler = () => {
    setDeactivate(true);
  };
  const RequestHandler = () => {
    setDeactivate(false);
    setRequest(true);
  };
  const navigate = useNavigate();
  const backToProfile = () => {
    navigate("/editprofile");
  };

  return (
    <PasswordWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Change Password </h4>
      </div>
      <p>Create a new password</p>
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="title"
        type="text"
        label="Current password"
        name="title"
        // value={formData.firstName}
        // onChange={handleInputChange}
        bgClr="transparent"
      />
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="title"
        type="text"
        label="New password"
        name="title"
        // value={formData.firstName}
        // onChange={handleInputChange}
        bgClr="transparent"
      />
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="title"
        type="text"
        label="Retype new password"
        name="title"
        // value={formData.firstName}
        // onChange={handleInputChange}
        bgClr="transparent"
      />
      <span>
        <Link to="/forgot-password">Forget Password?</Link>
      </span>

      <Button width="177px">Save</Button>
      <div className="info">
        <h4 className="heading">Deactivate Account</h4>
      </div>
      <p>Are you sure you want to close your account?</p>
      <div className="bton">
        <Button type="outline" width="192px" onClick={DeactivateHandler}>
          continue
        </Button>
      </div>
      {deactivate && (
        <Modal open={deactivate} setOpen={setDeactivate} width="757px">
          <DeactivateAccount click={RequestHandler} />
        </Modal>
      )}
      {request && (
        <Modal open={request} setOpen={setRequest} width="757px">
          <DeactivateRequest/>
        </Modal>
      )}
    </PasswordWrap>
  );
};

export default ChangePassword;
