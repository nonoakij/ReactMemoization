import React from "react";
import { MemorizedHeavyComponent } from "../../components/HeavyComponent";

class MemorizedHeavyPage extends React.Component {
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

  render(): React.ReactNode {
    return (
      <section>
        <h1>MemorizedHeavyPage</h1>
        <MemorizedHeavyComponent />
        <button type="button" onClick={this.update}>
          update
        </button>
      </section>
    );
  }
}

export default MemorizedHeavyPage;
