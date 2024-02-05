import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import HtmltoPdf from "./HtmltoPdf";

const CsvtoJson = () => {
  const [csvContent, setCsvContent] = useState("");
  const [jsonResult, setJsonResult] = useState([]);

  const convertCsvToJson = () => {
    Papa.parse(csvContent, {
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        const res = result.data.filter((item) => item.Org !== null);
        console.log("res", res);
        setJsonResult(res);
      },
    });
  };
  console.log(jsonResult);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const content = e.target.result;
        setCsvContent(content);
      };

      reader.readAsText(file);
    }
    convertCsvToJson();
  };

  const handleAllButtons = () => {
    let myBtns = document.getElementsByClassName("commonBtn");
    for (let i = 0; i < myBtns.length; i++) {
      const btn = myBtns[i];
      btn.click();
    }
  };

  useEffect(() => {
    convertCsvToJson();
  }, [csvContent]);

  return (
    <div>
      <div
        style={{
          //   padding: "32px",
          background: "#fff",
          flexDirection: "column",
        }}
      >
        {jsonResult?.length === 0 && (
          <input type="file" onChange={handleFileChange} />
        )}

        {jsonResult && (
          <div>
            <pre>
              {jsonResult.map((item) => (
                <HtmltoPdf key={item} item={item} />
              ))}
            </pre>
          </div>
        )}
        <button
          style={{
            position: "absolute",
            top: "34px",
            right: "38px",
            width: "60px",
            height: "60px",
            borderRadius: "60px",
            background: "#0275d8",
            border: "none",
          }}
          onClick={handleAllButtons}
        >
          <i class="fa-solid fa-download"></i>
        </button>
      </div>
    </div>
  );
};

export default CsvtoJson;
