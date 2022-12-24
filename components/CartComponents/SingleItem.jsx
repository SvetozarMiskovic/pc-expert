import { Divider, Icon } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
function SingleItem({ details, removeItem }) {
  return (
    <div className="single-item-wrapper">
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Icon
          position={"absolute"}
          right={0}
          top={1}
          cursor={"pointer"}
          color={"#f89a20"}
          as={FaTimes}
          onClick={() => {
            removeItem(details.id);
          }}
        />
      </div>
      <div className="single-item">
        <div className="single-item-image">
          <Image width={75} height={75} src={"/T1.png"} alt="img" />
        </div>
        <div className="single-item-body">
          <h3>{details.title}</h3>
          <p>{`${details.price} KM`}</p>
        </div>
      </div>
      <Divider borderColor="#f89a20" />
    </div>
  );
}

export default SingleItem;
