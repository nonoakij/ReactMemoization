import React from "react";
import { EveryUpdateComponent } from "../../components/EveryUpdateComponent";

class UpdateEveryPage extends React.Component {
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
    const args = {};
    return (
      <section>
        <h1>UpdateEveryPage</h1>
        <EveryUpdateComponent args={args} />
        <button type="button" onClick={this.update}>
          update
        </button>
      </section>
    );
  }
}

export default UpdateEveryPage;
