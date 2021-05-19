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

interface State {
  count: number;
}

class PracticePage extends React.Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  countUp(count: number): void {
    this.setState({
      count: count + 1,
    });
  }

  update(count: number): void {
    this.setState({
      count,
    });
  }

  render(): JSX.Element {
    const { count } = this.state;
    console.log("%crender called", "color:red");
    return (
      <section>
        <h1>PracticePage</h1>
        <div>
          <ChildComponent count={count} />
          <MemoizedChildComponent count={count} />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              this.countUp(count);
            }}
          >
            count up
          </button>
          <button
            type="button"
            onClick={() => {
              this.update(count);
            }}
          >
            update
          </button>
        </div>
      </section>
    );
  }
}

export default PracticePage;
