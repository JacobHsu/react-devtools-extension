'use strict';

/* globals chrome */

const React = require('react');
const {sansSerif} = require('./Themes/Fonts');
const Themes = require('./Themes/Themes');

class Panel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          showTroubleshooting: false,
        };
    }

    componentDidMount() {
      //if (this.state.loading) {
        this._troubleshootingTimeout = setTimeout(
          () => this.setState({showTroubleshooting: true}),
          3000
        );
      //}
    }

    render() {
        var theme = Themes.ChromeDefault;
        return (
            <div style={loadingStyle(theme)}>
              <h2>Connecting to React…</h2>
              <br />
              {this.state.showTroubleshooting && (
                <a style={{
                  color: 'gray',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }} onClick={() => {
                  chrome.tabs.create({
                    active: true,
                    url: 'https://github.com/facebook/react-devtools/blob/master/' +
                      'README.md#the-react-tab-doesnt-show-up',
                  });
                }}>
                  Click here for troubleshooting instructions
                </a>
              )}
            </div>
          );
    }    
}

const loadingStyle = (theme: Theme) => ({
    fontFamily: sansSerif.family,
    fontSize: sansSerif.sizes.large,
    textAlign: 'center',
    padding: 30,
    flex: 1,
  
    // This color is hard-coded to match app.html and standalone.js
    // Without it, the loading headers change colors and look weird
    color: '#aaa',
  });
  
  module.exports = Panel;