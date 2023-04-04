import { Stack } from "@mui/material";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import "./style/Socials.css";

function Socials(props) {
  const handletwitterChange = (event) => {
    props.setTwitter(event.target.value);
  };

  const handleinstaChange = (event) => {
    props.setInstagram(event.target.value);
  };

  const handlefacebookChange = (event) => {
    props.setFacebook(event.target.value);
  };

  const handleportfolioChange = (event) => {
    props.setPortfolio(event.target.value);
  };

  return (
    <div className="social-container">
      <span className="heading">Add your socials accounts</span>
      <hr className="line-hr" />
      <Stack gap={2}>
        <div class="grid grid-cols-6">
          <FaTwitter class="icon-position col-span-1" />
          <span class="col-span-5">
            <input
              class="col-span-5"
              className="textfield"
              type="text"
              placeholder="Twitter"
              value={props.twitter}
              onChange={handletwitterChange}
            ></input>
          </span>
        </div>

        <div class="grid grid-cols-6">
          <FaInstagram class="icon-position col-span-1" />
          <span class="col-span-5">
            <input
              class="col-span-5"
              className="textfield"
              placeholder="Instagram"
              value={props.instagram}
              onChange={handleinstaChange}
            ></input>
          </span>
        </div>

        <div class="grid grid-cols-6">
          <FaFacebook class="icon-position col-span-1" />
          <span class="col-span-5">
            <input
              class="col-span-5"
              className="textfield"
              placeholder="Facebook"
              value={props.facebook}
              onChange={handlefacebookChange}
            ></input>
          </span>
        </div>

        <div class="grid grid-cols-6">
          <TbWorld class="icon-position col-span-1" />
          <span class="col-span-5">
            <input
              class="col-span-5"
              className="textfield"
              placeholder="Portfolio"
              value={props.portfolio}
              onChange={handleportfolioChange}
            ></input>
          </span>
        </div>
      </Stack>
    </div>
  );
}

export default Socials;
