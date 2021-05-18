import range from "lodash/range";
import React from "react";
import { ManyPropsComponent } from "../../components/ManyPropsComponent";

const args = { ...range(1000000) };

class ManyPropsPage extends React.Component {
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
        <h1>ManyPropsPage</h1>
        <ManyPropsComponent {...args} />
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

export default ManyPropsPage;
