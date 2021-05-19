import range from "lodash/range";
import React from "react";
import { MemorizedManyPropsComponent } from "../../components/ManyPropsComponent";

// Create an object like {1:1, 2:2, 3:3, ...., 1000000:1000000}
const args = { ...range(1000000) };

class MemorizedManyPropsPage extends React.Component {
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
        <h1>MemorizedManyPropsPage</h1>
        <MemorizedManyPropsComponent {...args} />
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

export default MemorizedManyPropsPage;
