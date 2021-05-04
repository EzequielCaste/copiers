import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => (
  <i className="text-4xl text-red-500 fas fa-map-marker-alt"></i>
);

class SimpleMap extends Component {
  // ,,
  static defaultProps = {
    center: {
      lat: -24.775142698283023,
      lng: -65.40610906462925,
    },
    zoom: 17,
  };
  render() {
    return (
      <div className="mx-auto my-10 w-9/12" style={{height: '65vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_MAP_KEY}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={-24.77506476747885}
            lng={-65.40609565357236}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
export default SimpleMap;
