import React from "react";

interface Props {
  args: {};
}

export const EveryUpdateComponent: React.VFC<Props> = (props) => null;

export const MemorizedEveryUpdateComponent = React.memo(EveryUpdateComponent);
