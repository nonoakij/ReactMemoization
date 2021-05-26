import React from "react";
import { HeavyComponent } from "../../components/HeavyComponent";

class HeavyPage extends React.Component {
  constructor(props: {}) {
    super(props);
    this.update = this.update.bind(this);
  }

  componentDidUpdate(): void {
    performance.mark("updated");
    performance.measure("measure update to updated", "update", "updated");
    console.log(performance.getEntriesByType("measure"));
  }

  componentWillUnmount(): void {
    performance.clearMarks();
    performance.clearMeasures();
  }

  update(): void {
    performance.mark("update");
    this.forceUpdate();
  }

  render(): JSX.Element {
    return (
      <section>
        <h1>HeavyPage</h1>
        <HeavyComponent />
        <button type="button" onClick={this.update}>
          update
        </button>
      </section>
    );
  }
}

export default HeavyPage;
