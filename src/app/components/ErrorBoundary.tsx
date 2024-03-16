"use client"
import React, { Component, ReactNode } from 'react';
import Error from './Error';
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // It will catch errors in any component below. We can also log the error to an error reporting service.
    console.log(error)
  }

  render() {
    if (this.state.hasError) {
      return <Error/>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
