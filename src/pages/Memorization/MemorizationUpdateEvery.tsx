import React from 'react';

class MemorizationUpdateEveryPage extends React.Component {
  shouldComponentUpdate(): boolean {
    performance.mark('update');
    return true;
  }

  componentDidUpdate(): void {
    performance.mark('updated');
    performance.measure('measure update to updated', 'update', 'updated');
    console.log(performance.getEntriesByType('measure'));
  }

  componentWillUnmount(): void {
    performance.clearMarks();
    performance.clearMeasures();
  }

  render(): JSX.Element {
    return (
      <section>
        <h1>MemorizationUpdateEveryPage</h1>
      </section>
    );
  }
}

export default MemorizationUpdateEveryPage;
