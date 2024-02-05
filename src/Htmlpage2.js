import React from "react";
import HtmlCSS from "./Html.module.css";
import Logo from "./logo.png";

const Htmlpage2 = ({ item }) => {
  return (
    <>
      <div
        className={HtmlCSS.topSection}
        style={{
          backgroundImage: "url(/images/tiago.png)",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
          backgroundPosition: "center",
          height: "250px",
          marginTop: "80px",
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
                fontFamily: "mySecondFont",
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
                fontFamily: "mySecondFont",
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
            <p>{item.Name}</p>
            <p>8949893195</p>
            <p>{item.Email}</p>
          </div>
          <div className={HtmlCSS.clentDetailsRightside}>
            <p></p>
            <p>{item.Vehicle_Name}</p>
          </div>
        </div>
      </div>
      <div style={{ padding: "40px 80px" }}>
        <div style={{ borderBottom: "2px solid blue" }}></div>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            <div>
              <p style={{ fontFamily: "myThirdFont" }}>Description</p>
            </div>
            <div>
              <p style={{ fontFamily: "myThirdFont" }}>{item.Vehicle_Name}</p>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "flex",
                gap: "20px",
                fontFamily: "myThirdFont",
              }}
            >
              <p>Quantity</p>
              <p>EMI</p>
              <p>Duration</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "40px",
                fontFamily: "myThirdFont",
              }}
            >
              <p>1</p>
              <p style={{ marginLeft: "21px" }}>₹32323</p>
              <p>36 months</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "20px 80px",
          backgroundColor: "#e3e3e3",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            color: "#e50000",
            textAlign: "start",
            fontFamily: "mySecondFont",
          }}
        >
          Zecat Benefits
        </p>
        <p
          style={{
            // fontSize: "12px",
            fontWeight: 500,
            textAlign: "start",
            fontFamily: "myThirdFont",
          }}
        >
          Zero Additional/Hidden Charges
        </p>
        <p
          style={{
            // fontSize: "12px",
            fontWeight: 500,
            textAlign: "start",
            fontFamily: "myThirdFont",
          }}
        >
          Unlimited Charging with 1C Charging Prime Subscription
        </p>
        <p
          style={{
            // fontSize: "12px",
            fontWeight: 500,
            textAlign: "start",
            fontFamily: "myThirdFont",
          }}
        >
          Registration, Insurance and Maintenance all inclusive plan
        </p>
        <p
          style={{
            // fontSize: "12px",
            fontWeight: "bolder",
            textAlign: "start",
            fontFamily: "myThirdFont",
          }}
        >
          Save upto ₹2.4+ Lacs with Zecat instead of a standard loan
        </p>
      </div>
      <div
        style={{
          padding: "20px 80px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "24px",
              textAlign: "start",
              fontFamily: "mySecondFont",
            }}
          >
            TERMS & CONDITIONS
          </p>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              alignItems: "flex-start",
              paddingLeft: "15px",
              fontFamily: "myThirdFont",
              textAlign: "start",
            }}
          >
            <li style={{ fontSize: "12px" }}>
              Above information is not an invoice and only an estimate of
              <br />
              goods/services
            </li>
            <li style={{ fontSize: "12px" }}>
              Payment will be due prior to provision or delivery of
              <br />
              goods/services.
            </li>
            <li style={{ fontSize: "12px" }}>
              The EMI payment will be made on a monthly basis at start of
              <br />
              every month
            </li>
            <li style={{ fontSize: "12px" }}>
              Final prices are subject to changes
            </li>
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              fontWeight: 900,
              fontFamily: "myFirstFont",
            }}
          >
            Booking Amount : ₹ 25000
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#F5F5F5",
          padding: "20px 80px",
          marginTop: "55px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "16px",
              textAlign: "center",
              fontFamily: "myThirdFont",
            }}
          >
            Please confirm your acceptance of this quote by signing below:
          </p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{ borderBottom: "2px solid blue", padding: "0px 20px" }}
            ></div>
            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                fontFamily: "myThirdFont",
                marginTop: "4px",
              }}
            >
              Signature
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{ borderBottom: "2px solid blue", padding: "0px 20px" }}
            ></div>
            <p
              style={{
                fontSize: "16px",
                textAlign: "center",
                fontFamily: "myThirdFont",
                marginTop: "4px",
              }}
            >
              Date signed
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Htmlpage2;
