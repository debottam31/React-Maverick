import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
    //console.log(this.props);
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)