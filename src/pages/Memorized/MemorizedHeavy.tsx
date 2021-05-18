import React from "react";
import { MemorizedHeavyComponent } from "../../components/HeavyComponent";

class MemorizedHeavyPage extends React.Component {
  componentDidUpdate(): void {
    performance.mark("updated");
    performance.measure("measure update to updated", "update", "updated");
    console.log(performance.getEntriesByType("measure"));
  }

  componentWillUnmount(): void {
    performance.clearMarks();
    performance.clearMeasures();
  }

  render(): JSX.Element {
    return (
      <section>
        <h1>MemorizedHeavyPage</h1>
        <MemorizedHeavyComponent />
        <button
          type="button"
          onClick={() => {
            performance.mark("update");
            this.forceUpdate();
          }}
        >
          update
        </button>
      </section>
    );
  }
}

export default MemorizedHeavyPage;
