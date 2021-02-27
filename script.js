var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var checkStatus = function checkStatus(response) {
  if (response.ok) {
    // .ok returns true if response status is 200-299
    return response;
  }
  throw new Error('Request was either a 404 or 500');
};

var json = function json(response) {
  return response.json();
};

var Movie = function Movie(props) {
  var _props$movie = props.movie,
      Title = _props$movie.Title,
      Year = _props$movie.Year,
      imdbID = _props$movie.imdbID,
      Type = _props$movie.Type,
      Poster = _props$movie.Poster;


  return React.createElement(
    "div",
    { className: "row" },
    React.createElement(
      "div",
      { className: "col-4 col-md-3 mb-3" },
      React.createElement(
        "a",
        { href: "https://www.imdb.com/title/" + imdbID + "/", target: "_blank" },
        React.createElement("img", { src: Poster, className: "img-fluid" })
      )
    ),
    React.createElement(
      "div",
      { className: "col-8 col-md-9 mb-3" },
      React.createElement(
        "a",
        { href: "https://www.imdb.com/title/" + imdbID + "/", target: "_blank" },
        React.createElement(
          "h4",
          null,
          Title
        ),
        React.createElement(
          "p",
          null,
          Type,
          " | ",
          Year
        )
      )
    )
  );
};

var MovieFinder = function (_React$Component) {
  _inherits(MovieFinder, _React$Component);

  function MovieFinder(props) {
    _classCallCheck(this, MovieFinder);

    var _this = _possibleConstructorReturn(this, (MovieFinder.__proto__ || Object.getPrototypeOf(MovieFinder)).call(this, props));

    _this.state = {
      searchTerm: '',
      results: [],
      error: ''
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
      var _this2 = this;

      event.preventDefault();
      var searchTerm = this.state.searchTerm;

      searchTerm = searchTerm.trim();
      if (!searchTerm) {
        return;
      }

      fetch("https://www.omdbapi.com/?s=" + searchTerm + "&apikey=b7da8d63").then(checkStatus).then(json).then(function (data) {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }

        if (data.Response === 'True' && data.Search) {
          _this2.setState({ results: data.Search, error: '' });
        }
      }).catch(function (error) {
        _this2.setState({ error: error.message });
        console.log(error);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          searchTerm = _state.searchTerm,
          results = _state.results,
          error = _state.error;


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
              React.createElement("input", {
                type: "text",
                className: "form-control mr-sm-2",
                placeholder: "frozen",
                value: searchTerm,
                onChange: this.handleChange
              }),
              React.createElement(
                "button",
                { type: "submit", className: "btn btn-primary" },
                "Submit"
              )
            ),
            function () {
              if (error) {
                return error;
              }
              return results.map(function (movie) {
                return React.createElement(Movie, { key: movie.imdbID, movie: movie });
              });
            }()
          )
        )
      );
    }
  }]);

  return MovieFinder;
}(React.Component);

ReactDOM.render(React.createElement(MovieFinder, null), document.getElementById('root'));