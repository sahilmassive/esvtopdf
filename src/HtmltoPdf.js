import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import HtmlCSS from "./Html.module.css";
// import mainLogo from "./tiago.png";
import Logo from "./logo.png";
import { Container } from "react-bootstrap";

const HtmltoPdf = ({ item }) => {
  console.log(item);
  const contentRef = useRef(null);

  const convertJsxToPdf = (name) => {
    const content = contentRef.current;

    if (content) {
      html2pdf(content, {
        // margin: 10,
        filename: `${name}.pdf`,
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
    }
  };

  return (
    <div>
      <div ref={contentRef}>
        <div className={HtmlCSS.mainDiv}>
          <div
            className={HtmlCSS.topSection}
            style={{
              backgroundImage: "url(/images/tiago.png)",
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className={HtmlCSS.topData}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>
                  <img src={Logo} alt="" width={"200px"} />
                </div>
                <p
                  style={{
                    fontSize: "24px",
                    color: "#fff",
                    fontWeight: "700",
                  }}
                >
                  Zecat.in
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "2px solid #fff",
                  paddingTop: "20px",
                  paddingLeft: "12px",
                  paddingRight: "12px",
                }}
              >
                <p style={{ textAlign: "start", color: "#fff" }}>
                  Springhouse co-working plot no.
                  <br />
                  2, sector 43, gurgaon, 122009
                  <br />
                  info@zecat.in
                </p>
                <div style={{ textAlign: "end", color: "#fff" }}>
                  <p>Date: 31/01/2024</p>
                  <p>Valid Unit: 15/02/2024</p>
                  <p>Customer ID: N/A</p>
                </div>
              </div>
            </div>
          </div>
          <div className={HtmlCSS.allData}>
            <div className={HtmlCSS.clentDetails}>
              <p>client</p>
              <p>vehicle number</p>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{ opacity: 0 }}
        className="commonBtn"
        onClick={() => convertJsxToPdf(item.name)}
      >
        Convert to PDF
      </button>
    </div>
  );
};

export default HtmltoPdf;
