import React from 'react';

// Optional: integrate with Sentry or your own logger
function logErrorToService(error, errorInfo) {
  console.error('Logging error to service:', error, errorInfo);
  // Example: Sentry.captureException(error, { extra: errorInfo });
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      key: Date.now(), // to force reset
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so fallback UI can be shown
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    // Reset the boundary by changing key
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      key: Date.now(),
    });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback;

      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            onRetry={this.handleReset}
          />
        );
      }

      // Default fallback
      return (
        <div className="p-4 border border-red-400 bg-red-50 text-red-800 rounded">
          <h2>Something went wrong.</h2>
          <button onClick={this.handleReset}>Try again</button>
        </div>
      );
    }

    // `key` ensures child remount on reset
    return <div key={this.state.key}>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
