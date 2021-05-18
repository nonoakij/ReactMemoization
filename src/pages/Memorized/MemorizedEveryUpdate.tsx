import random from "lodash/random";
import React from "react";
import { MemorizedEveryUpdateComponent } from "../../components/EveryUpdateComponent";

class MemorizedUpdateEveryPage extends React.Component {
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
    const randomNumber = random(0, 1000);
    return (
      <section>
        <h1>MemorizedUpdateEveryPage</h1>
        <MemorizedEveryUpdateComponent number={randomNumber} />
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

export default MemorizedUpdateEveryPage;
