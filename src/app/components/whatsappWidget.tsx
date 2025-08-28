"use client";

import { useState } from "react";

export default function WhatsappWidget() {
  const [hover, setHover] = useState(false);

  const whatsappNumber = "+573105639653";
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;

  return (
    <>
      {/* Botón personalizado */}
      <button
        onClick={() => window.open(whatsappLink, "_blank")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Escríbeme por WhatsApp"
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          border: "none",
          width: 60,
          height: 60,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: "pulse 2.5s infinite",
          zIndex: 10000,
          transition: "transform 0.2s ease",
        }}
      >
        <WhatsappIcon />
      </button>

      {/* Tooltip */}
      {hover && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            backgroundColor: "#25D366",
            color: "white",
            padding: "10px 16px",
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            gap: 10,
            fontWeight: "bold",
            fontSize: 15,
            userSelect: "none",
            whiteSpace: "nowrap",
            opacity: hover ? 1 : 0,
            transform: hover ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1 }}>💬</span>
          <span>¿Necesitas ayuda? Escríbeme</span>
          <span style={{ fontSize: 22, lineHeight: 1 }}>📱</span>
        </div>
      )}

      {/* Animación pulse keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          button:hover {
            transform: scale(1.15);
          }
        `}
      </style>
    </>
  );
}

// SVG WhatsApp Icon clásico y limpio
function WhatsappIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.52 3.48A11.77 11.77 0 0 0 12 0C5.373 0 0 5.373 0 12a11.875 11.875 0 0 0 1.796 6.051L0 24l5.996-1.763A11.905 11.905 0 0 0 12 24c6.627 0 12-5.373 12-12a11.77 11.77 0 0 0-3.48-8.52zm-8.396 16.19c-1.95 0-3.7-.511-5.3-1.39l-.38-.226-3.557 1.045 1.06-3.458-.248-.363a8.793 8.793 0 0 1-1.34-4.725c0-4.856 3.954-8.81 8.81-8.81 2.352 0 4.56.917 6.214 2.577a8.757 8.757 0 0 1 2.577 6.213c0 4.855-3.954 8.81-8.81 8.81zm4.774-6.562c-.26-.13-1.538-.758-1.777-.845-.238-.087-.412-.13-.586.13-.175.26-.674.845-.826 1.02-.152.174-.3.195-.56.065-.26-.13-1.098-.405-2.093-1.295-.774-.688-1.296-1.54-1.45-1.8-.152-.26-.017-.4.114-.53.117-.116.26-.303.39-.454.13-.152.174-.26.26-.433.087-.174.043-.325-.022-.455-.065-.13-.586-1.41-.803-1.93-.21-.495-.426-.428-.586-.436l-.5-.009c-.174 0-.455.065-.69.325-.234.26-.895.874-.895 2.13 0 1.255.917 2.47 1.045 2.64.13.174 1.8 2.744 4.36 3.847.609.263 1.084.42 1.453.538.609.195 1.164.167 1.603.102.489-.07 1.538-.627 1.757-1.232.217-.607.217-1.13.152-1.233-.065-.13-.238-.195-.497-.325z" />
    </svg>
  );
}
