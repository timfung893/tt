import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import PhotoCell from "../product/PhotoCell";
import { Masonry } from "masonic";
import * as contentful from "../../../utils/contenful";
import { smsList } from "../../assets/data/data";

function TheStart(props) {

  return (
    <>
      <section className="the-start" id="theStart">
        {/* SMS OF LOVE */}
        <div className="container">
          <Heading title="Đêm DM" desc="Đệt... Muỗi chích mà cũng mát lòng!" />
          <div className="sms-container">
            {smsList.map((item) => (
              <div className="sms-item" key={item.readable_date}>
                <span className="sms-date" >{item.readable_date}</span>
                <div className="sms-body">
                    <img src={item.image} alt="cover" />
                    <div className="body-details" >
                        <span className="sms-name" >{item.contact_name}</span>
                        <span>{item.body}</span>
                    </div>
                </div>
              </div>
            ))}
          </div>
          <Heading title="" desc="Còn nữa, nhưng để dành nha keke..." />
        </div>
      </section>
    </>
  );
}

export default TheStart;
