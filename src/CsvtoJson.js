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
        setJsonResult(result.data);
      },
    });
  };

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
        <button onClick={handleAllButtons}>download all</button>
      </div>
    </div>
  );
};

export default CsvtoJson;
