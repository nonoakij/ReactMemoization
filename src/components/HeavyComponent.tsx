import React from "react";

export const HeavyComponent: React.VFC = () => {
  let i = 0;
  while (i < 100000000) {
    i += 1;
  }
  return null;
};

export const MemorizedHeavyComponent = React.memo(HeavyComponent);
