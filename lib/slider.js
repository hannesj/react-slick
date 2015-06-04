'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _innerSlider = require('./inner-slider');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _json2mq = require('json2mq');

var _json2mq2 = _interopRequireDefault(_json2mq);

var _reactResponsiveMixin = require('react-responsive-mixin');

var _reactResponsiveMixin2 = _interopRequireDefault(_reactResponsiveMixin);

var Slider = _react2['default'].createClass({
  displayName: 'Slider',

  //mixins: [ResponsiveMixin],
  getInitialState: function getInitialState() {
    return {
      breakpoint: null
    };
  },
  // componentDidMount: function () {
  //   if (this.props.responsive) {
  //     var breakpoints = this.props.responsive.map(breakpt => breakpt.breakpoint);
  //     breakpoints.sort((x, y) => x - y);

  //     breakpoints.forEach((breakpoint, index) => {
  //       var bQuery;
  //       if (index === 0) {
  //         bQuery = json2mq({minWidth: 0, maxWidth: breakpoint});
  //       } else {
  //         bQuery = json2mq({minWidth: breakpoints[index-1], maxWidth: breakpoint});
  //       }
  //       this.media(bQuery, () => {
  //         this.setState({breakpoint: breakpoint});
  //       });
  //     });

  //     // Register media query for full screen. Need to support resize from small to large
  //     var query = json2mq({minWidth: breakpoints.slice(-1)[0]});

  //     this.media(query, () => {
  //       this.setState({breakpoint: null});
  //     });
  //   }
  // },
  render: function render() {
    var _this = this;

    var settings;
    var newProps;
    if (this.state.breakpoint) {
      newProps = this.props.responsive.filter(function (resp) {
        return resp.breakpoint === _this.state.breakpoint;
      });
      settings = (0, _objectAssign2['default'])({}, this.props, newProps[0].settings);
    } else {
      settings = this.props;
    }
    return _react2['default'].createElement(
      _innerSlider.InnerSlider,
      settings,
      this.props.children
    );
  }
});

module.exports = Slider;