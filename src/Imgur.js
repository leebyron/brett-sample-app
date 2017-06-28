import React from 'react';
import 'whatwg-fetch'; // adds fetch to older browsers

export default class Imgur extends React.Component {
  constructor(props) {
    super();
    this.state = { images: null, loadState: 'Loading' };
    this.loadImages(props.topic);
  }

  componentWillReceiveProps(nextProps) {
    this.loadImages(nextProps.topic);
  }

  loadImages(topic) {
    fetch('http://api.imgur.com/3/gallery/r/' + topic, {
      headers: {
        'Authorization': 'Client-ID 8b3d35d566bde2d'
      }
    })
      .then(response => {
        // Test if topic changed during load
        if (this.props.topic === topic) {
          return response.json().then(body => this.setState({
            images: body.data,
            loadState: body.success ? 'Ready' : 'Error'
          }))
        }
      })
      .catch(error => this.setState({ loadState: 'Failed' }));
  }

  render() {
    if (this.state.loadState === 'Loading') {
      return <div>Imgur({this.props.topic})...</div>;
    }
    if (this.state.loadState === 'Failed') {
      return <div>Imgur({this.props.topic}) failed to load.</div>;
    }
    if (this.state.loadState === 'Error') {
      return <div>Imgur({this.props.topic}) loaded with error.</div>;
    }
    return (
      <div>
        Imgur viewer. {this.props.topic}
        <ul>
          {this.state.images.map(image =>
            <li key={image.id}>
              <img src={image.link} alt={image.title} />
              <p>{image.title}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
