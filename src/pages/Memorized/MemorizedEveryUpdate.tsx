import React from "react";
import { MemorizedEveryUpdateComponent } from "../../components/EveryUpdateComponent";

class MemorizedUpdateEveryPage extends React.Component {
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
    const args = {};
    return (
      <section>
        <h1>MemorizedUpdateEveryPage</h1>
        <MemorizedEveryUpdateComponent args={args} />
        <button type="button" onClick={this.update}>
          update
        </button>
      </section>
    );
  }
}

export default MemorizedUpdateEveryPage;
