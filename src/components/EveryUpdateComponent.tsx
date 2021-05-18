import React from "react";

interface Props {
  number: number;
}

export const EveryUpdateComponent: React.VFC<Props> = (props) => null;

export const MemorizedEveryUpdateComponent = React.memo(EveryUpdateComponent);
