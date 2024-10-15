import React, { ErrorInfo, PropsWithChildren } from "react";

type Props = PropsWithChildren;

type State = {
  hasError: boolean;
  error?: unknown;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  // optional
  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const {error, hasError} = this.state;
    if (hasError) {
      // fallback
      return <>
      <div>{String(error)}</div>
      <button onClick={() => this.setState({...this.state, hasError: false})}>Retry</button>
      </>;
    }

    return this.props.children; 
  }
}