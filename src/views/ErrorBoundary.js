import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  componentDidCatch(error) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error: error.message
    })
  }

  render() {
    if (this.state.error) {
      // Fallback UI if an error occurs
      return (
        <div>
          <h2>{'Oh-no! Something went wrong'}</h2>
          <div>{'Component Stack Error Details: '}</div>
          <p className="red">{this.state.error && this.state.error.toString()}</p>
        </div>
      )
    }
    // component normally just renders children
    return this.props.children
  }
}

export default ErrorBoundary
