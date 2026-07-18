"use client";

import { useEffect } from "react";
import "../css/chess.css";

export default function ChessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("chess-page");
    return () => {
      document.body.classList.remove("chess-page");
    };
  }, []);

  return <>{children}</>;
}
