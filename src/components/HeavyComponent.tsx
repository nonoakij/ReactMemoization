import React from "react";

const doSomeHeavyProcess: VoidFunction = () => {
  let i = 0;
  while (i < 100000000) {
    i += 1;
  }
};

export const HeavyComponent: React.VFC = () => {
  doSomeHeavyProcess();
  return null;
};

export const MemorizedHeavyComponent = React.memo(HeavyComponent);
