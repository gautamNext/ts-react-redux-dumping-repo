import React from "react";

export const customMemo = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return class extends React.PureComponent<P> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};
