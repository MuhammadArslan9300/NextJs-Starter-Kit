'use client';
import React from "react";
import Button from "./Button";

export default function FreeTrialBadge({
  text = "3-day FREE Trial",
}: {
  text?: string;
}) {
  return (
    <Button
      size="sm"
      rounded="50px"
      variant="outlined"
      color="primary"
      
      onClick={() => {}}
    >
      {text}
    </Button>
  );
}
