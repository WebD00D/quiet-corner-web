import React, {Component} from "react";
import cx from 'classnames';

class Faq extends Component {

constructor(props) {
 super(props);

 this.state = {
   icon: "",
   open: false
 }

}

render() {
  return (
    <div className="faq-row">

      <div className="faq-header" onClick={() => this.setState({ open: !this.state.open })}>
        <div className="faq-title">{this.props.headline}</div>
        { this.state.open ? <img className="faq-button" src={require("../images/open.png")} /> : <img className="faq-button" src={require("../images/closed.png")} />}

      </div>
      <div className={cx(["faq-content", {"faq-content--open": this.state.open}])}>
        {this.props.paragraphOne}
        {this.props.paragraphTwo
          ? <div style={{marginTop: '12px'}}>
              {this.props.paragraphTwo}
            </div>
          : ""
        }
        {this.props.paragraphThree
          ? <div style={{marginTop: '12px'}}>
              {this.props.paragraphThree}
            </div>
          : ""
        }
      </div>


    </div>
  )
}

}

export default Faq
