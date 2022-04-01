


function ErrorFallback({error, resetErrorBoundary}) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary} className="btn btn-primary">Try again</button>
      </div>
    )
  }

  export default ErrorFallback;