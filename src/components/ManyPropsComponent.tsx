import React from "react";

interface Props {
  [k: number]: number;
}

export const ManyPropsComponent: React.VFC<Props> = (props) => null;

export const MemorizedManyPropsComponent = React.memo(ManyPropsComponent);
