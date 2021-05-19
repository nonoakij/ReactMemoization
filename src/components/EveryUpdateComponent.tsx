import React from "react";

interface Props {
  args: Record<string, unknown>;
}

export const EveryUpdateComponent: React.VFC<Props> = (props) => null;

export const MemorizedEveryUpdateComponent = React.memo(EveryUpdateComponent);
