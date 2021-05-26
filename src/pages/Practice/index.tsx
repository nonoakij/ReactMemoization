import React from "react";

interface ChildComponentProps {
  count: number;
}

const ChildComponent: React.VFC<ChildComponentProps> = ({ count }) => {
  console.log("%cChildComponent called", "color:green");
  return (
    <div>
      count of child component is
      {count}
    </div>
  );
};

const MemoizedChildComponent = React.memo<ChildComponentProps>(({ count }) => {
  console.log("%cMemoizedChildComponent called", "color:blue");
  return (
    <div>
      count of memoized child component is
      {count}
    </div>
  );
});

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
    this.update = this.update.bind(this);
  }

  countUp(): void {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  update(): void {
    this.setState((state) => ({
      count: state.count,
    }));
  }

  render(): React.ReactNode {
    const { count } = this.state;
    console.log("%crender called", "color:red");
    return (
      <section>
        <h1>PracticePage</h1>
        <ChildComponent count={count} />
        <MemoizedChildComponent count={count} />
        <button type="button" onClick={this.countUp}>
          count up
        </button>
        <button type="button" onClick={this.update}>
          update
        </button>
      </section>
    );
  }
}

export default PracticePage;
