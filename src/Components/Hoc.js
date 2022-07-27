import React from "react";

function Hoc(MyComponent) {

  class NewComponent extends React.Component {

    componentDidMount() {
      console.log(this.props);
    }

    render() {
      return <MyComponent {...this.props} />;
    }
  }

  return NewComponent;
}

export default Hoc;