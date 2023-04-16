import { Component, ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <Container>Algo deu errado.</Container>
    }
    return children
  }
}

const Container = styled.div`
  background-color: #810202;
  width: 100%;
  height: 100vh;

display: flex;
justify-content: center;
align-items: center;
`