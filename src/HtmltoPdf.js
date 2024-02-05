import React, { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import HtmlCSS from "./Html.module.css";
// import mainLogo from "./tiago.png";
import Logo from "./logo.png";
import Htmlpage2 from "./Htmlpage2";

const HtmltoPdf = ({ item }) => {
  console.log(item);
  const contentRef = useRef(null);

  const convertJsxToPdf = (name) => {
    const content = contentRef.current;

    if (content) {
      html2pdf(content, {
        // margin: { bottom: 20 },
        filename: `${name}.pdf`,
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
          format: [210, 320],
        },
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
              height: "250px",
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
                    fontFamily: "mySecondFont",
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
                <p
                  style={{
                    textAlign: "start",
                    color: "#fff",
                    fontFamily: "myThirdFont",
                  }}
                >
                  Springhouse co-working plot no.
                  <br />
                  2, sector 43, gurgaon, 122009
                  <br />
                  info@zecat.in
                </p>
                <div
                  style={{
                    textAlign: "end",
                    color: "#fff",
                    fontFamily: "myThirdFont",
                  }}
                >
                  <p>Date: 31/01/2024</p>
                  <p>Valid Unit: 15/02/2024</p>
                  <p>Customer ID: N/A</p>
                </div>
              </div>
            </div>
          </div>
          <div className={HtmlCSS.allData}>
            <div className={HtmlCSS.clentDetails}>
              <p>CLIENT</p>
              <p>Vehicle Model Name</p>
            </div>
            <div className={HtmlCSS.clentDetailsDiv}>
              <div className={HtmlCSS.clentDetailsleftside}>
                <p>{item?.Name}</p>
                <p>8949893195</p>
                <p>{item?.Email}</p>
              </div>
              <div className={HtmlCSS.clentDetailsRightside}>
                <p></p>
                <p>{item?.Vehicle_Name}</p>
              </div>
            </div>
            <div className={HtmlCSS.blueLine}></div>
            <div className={HtmlCSS.mainTable}>
              <div className={HtmlCSS.tableHeading}>
                <p style={{ width: "60%" }}>Quotation</p>
                <p style={{ width: "20%" }}>Loan</p>
                <p style={{ width: "20%" }}>Zecat</p>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Down Payment</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item?.Down_Pay}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item?.Down_Pay_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Monthly EMI</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item?.Monthly_EMI}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item?.Monthly_EMI_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Duration of Loan/Lease (years)</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Lease_Tenure}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Lease_Tenure_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Insurance cost</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Insurance}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Insurance_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Unlimited Charging + Maintenance</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Charging_Main}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Charging_Main_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Residual value</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Residual_Value}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Residual_Value_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Tax Saving 20%</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Tax_Saving_20}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Tax_Saving_20_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Net Cost (20% Income tax bracket)</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Net_Cost_20}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Net_Cost_20_Z}</p>
                </div>
              </div>
              <div
                className={HtmlCSS.alltabledata}
                style={{ background: "#e3e3e3" }}
              >
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "mySecondFont" }}>
                    Net Savings (Standard Loan vs Zecat)
                  </p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "mySecondFont" }}>
                    {item.Net_Saving_20}
                  </p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "mySecondFont" }}>
                    {item.Net_Saving_Z_20}
                  </p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Tax saving 30%</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Tax_Saving_30}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Tax_Saving_30_Z}</p>
                </div>
              </div>
              <div className={HtmlCSS.alltabledata}>
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p>Net cost (30% income tax bracket)</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p>{item.Net_Cost_30}</p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p>{item.Net_Cost_30_Z}</p>
                </div>
              </div>
              <div
                className={HtmlCSS.alltabledata}
                style={{ background: "#e3e3e3" }}
              >
                <div
                  className={HtmlCSS.alltabledatadiv1}
                  style={{ width: "60%" }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "mySecondFont" }}>
                    Net Savings (Standard Loan vs Zecat)
                  </p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv2}
                  style={{ width: "20%" }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "mySecondFont" }}>
                    {item.Net_Saving_30}
                  </p>
                </div>
                <div
                  className={HtmlCSS.alltabledatadiv3}
                  style={{ width: "20%" }}
                >
                  <p style={{ fontSize: "16px", fontFamily: "mySecondFont" }}>
                    {item.Net_Saving_Z_30}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Htmlpage2 item={item} />
        </div>
      </div>
      <button
        style={{ opacity: 0 }}
        className="commonBtn"
        onClick={() => convertJsxToPdf(item?.Name)}
      >
        Convert to PDF
      </button>
    </div>
  );
};

export default HtmltoPdf;
