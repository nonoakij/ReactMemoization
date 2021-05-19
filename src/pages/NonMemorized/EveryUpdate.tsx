import React from "react";
import { EveryUpdateComponent } from "../../components/EveryUpdateComponent";

class UpdateEveryPage extends React.Component {
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
    const args = {};
    return (
      <section>
        <h1>UpdateEveryPage</h1>
        <EveryUpdateComponent args={args} />
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

export default UpdateEveryPage;
