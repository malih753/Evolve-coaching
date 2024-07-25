import React, { useState } from "react";
import backimg from "../../../assets/profile/backarrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { CertificateWrap } from "./certificate.styles";
import { serverDomain } from "../../../Constant/serverDomain";

const Certificate = ({ formData, setFormData, handleChange, handleSubmit,user }) => {
  const navigate = useNavigate();
  const [certificateImage, setCertificateImage] = useState(
    formData?.id || user ? null : ""
  ); // State to store the selected image file

  const backToProfile = () => {
    navigate("/EditProfile");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (
      file &&
      (file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg")
    ) {
      setFormData({
        ...formData,
        certificates: [
          {
            ...formData.certificates[0],
            image: file,
          },
        ],
      });
      setCertificateImage(file);
    } else {
      alert("Please select a valid image file (jpg, jpeg, png)");
    }
  };

  return (
    <CertificateWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="" />
        <h4 className="heading">Add certificates </h4>
      </div>
      <p>Add your certificate details</p>
      <TextField
        parentClass="inputHolder"
        className="input-field"
        field_Name="title"
        type="text"
        label="Title"
        name="title"
        bgClr="transparent"
        value={formData.certificates[0]?.title}
        onChange={(e) => {
          setFormData({
            ...formData,
            certificates: [
              {
                ...formData.certificates[0],
                title: e.target.value,
              },
            ],
          });
        }}
      />
      <TextField
        variant="textarea"
        label="Description"
        parentClass="textareaHolder"
        value={formData.certificates[0]?.description}
        onChange={(e) => {
          setFormData({
            ...formData,
            certificates: [
              {
                ...formData.certificates[0],
                description: e.target.value,
              },
            ],
          });
        }}
      />
      <div className="img">
        <span>Image</span>
        <div className="imgWrap">
          <img
            src={
              certificateImage
                ? URL.createObjectURL(certificateImage)
                : `${serverDomain}${formData.certificates[0].image}`
            }
            alt="Certificate"
            style={{ width: "100%", height: "100%", borderRadius: "5px" }}
          />

          {/* <button className="bton">+</button> */}

          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            style={{
              opacity: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
            onChange={handleImageChange}
          />
        </div>
      </div>
      <Button width="177px" onClick={handleSubmit}>
        Save
      </Button>
    </CertificateWrap>
  );
};

export default Certificate;
