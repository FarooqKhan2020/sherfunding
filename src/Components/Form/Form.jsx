import { useEffect, useState } from "react";

export default function Form() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (e) => {
      if (typeof e.data !== "string") return;

      if (e.data.includes("setHeight")) {
        const height = e.data.split(":")[1];
        const iframe = document.getElementById("jotform-iframe");
        if (iframe) iframe.style.height = height + "px";
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f5f5",
        position: "relative",
        minHeight: "600px", // loader ke liye minimum height
      }}
    >
      {/* Loader / Skeleton */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f5f5f5",
            zIndex: 1,
          }}
        >
          {/* Simple spinner */}
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "4px solid #e0e0e0",
              borderTop: "4px solid #007bff",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
        </div>
      )}

      {/* Iframe - hidden until loaded */}
      <iframe
        id="jotform-iframe"
        src="https://form.jotform.com/260434730601043"
        title="JotForm"
        scrolling="no"
        onLoad={() => setIsLoading(false)}
        style={{
          width: "100%",
          height: "600px",
          border: "none",
          display: "block",
          backgroundColor: "#f5f5f5",
          transition: "height 0.2s ease",
          opacity: isLoading ? 0 : 1, // optional: fade in effect
        }}
      />
    </div>
  );
}