import range from "lodash/range";
import React from "react";
import { ManyPropsComponent } from "../../components/ManyPropsComponent";

// Create an object like {1:1, 2:2, 3:3, ...., 1000000:1000000}
const SomeLargeObject = { ...range(1000000) };

class ManyPropsPage extends React.Component {
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
        <h1>ManyPropsPage</h1>
        <ManyPropsComponent {...SomeLargeObject} />
        <button type="button" onClick={this.update}>
          update
        </button>
      </section>
    );
  }
}

export default ManyPropsPage;
