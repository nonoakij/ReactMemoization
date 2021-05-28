import React from "react";

interface ChildComponentProps {
  count: number;
}

const ChildComponent: React.VFC<ChildComponentProps> = ({ count }) => {
  return <div>{`count of child component is ${count}`}</div>;
};

const MemoizedChildComponent = React.memo<ChildComponentProps>(ChildComponent);

MemoizedChildComponent.displayName = "MemoizedChildComponent";

interface Props {}
interface State {
  count: number;
}

class PracticePage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.countUp = this.countUp.bind(this);
    this.updateWithSameState = this.updateWithSameState.bind(this);
  }

  countUp(): void {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  updateWithSameState(): void {
    this.setState((state) => state);
  }

  render(): React.ReactNode {
    const { count } = this.state;
    return (
      <section>
        <h1>PracticePage</h1>
        <ChildComponent count={count} />
        <MemoizedChildComponent count={count} />
        <button type="button" onClick={this.countUp}>
          count up
        </button>
        <button type="button" onClick={this.updateWithSameState}>
          update
        </button>
      </section>
    );
  }
}

export default PracticePage;
