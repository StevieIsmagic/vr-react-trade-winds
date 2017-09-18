import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Sphere,
} from 'react-vr';

export default class stevie_trade_winds extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('vr-island.jpg')}/>
        <Sphere
        radius={0.7}
        widthSegments={20}
        heightSegments={20}
        
        texture={asset('trade-winds.jpg')}
        style={{
          transform: [{translate: [0, 1.03, -3]}],
          color: 'white'
        }}>
        </Sphere>
        
      </View>
    );
  }
};

AppRegistry.registerComponent('stevie_trade_winds', () => stevie_trade_winds);
