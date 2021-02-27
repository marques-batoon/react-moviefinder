var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieFinder = function (_React$Component) {
    _inherits(MovieFinder, _React$Component);

    function MovieFinder(props) {
        _classCallCheck(this, MovieFinder);

        var _this = _possibleConstructorReturn(this, (MovieFinder.__proto__ || Object.getPrototypeOf(MovieFinder)).call(this, props));

        _this.state = {
            searchTerm: '',
            results: []
        };

        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(MovieFinder, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ searchTerm: event.target.value });
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();
            // doing nothing for now
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                searchTerm = _state.searchTerm,
                results = _state.results; // ES6 destructuring

            return React.createElement(
                "div",
                { className: "container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-12" },
                        React.createElement(
                            "form",
                            { onSubmit: this.handleSubmit, className: "form-inline my-4" },
                            React.createElement("input", { type: "text", className: "form-control mr-sm-2", placeholder: "frozen", value: searchTerm, onChange: this.handleChange }),
                            React.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Submit"
                            )
                        ),
                        results.map(function (movie) {
                            return null;
                        })
                    )
                )
            );
        }
    }]);

    return MovieFinder;
}(React.Component);

ReactDOM.render(React.createElement(MovieFinder, null), document.getElementById('root'));