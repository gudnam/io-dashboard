import React from 'react'
import PropTypes from 'prop-types'

const devices = [
  {
    id: 0,
    name: "스위처 1구",
    image: "https://io-dashboard.s3.ap-northeast-2.amazonaws.com/image/ic_switcher_one.png"
  },
  {
    id: 1,
    name: "스위처 2구",
    image: "https://io-dashboard.s3.ap-northeast-2.amazonaws.com/image/ic_switcher_two.png"
  },
  {
    id: 2,
    name: "링커",
    image: "https://io-dashboard.s3.ap-northeast-2.amazonaws.com/image/ic_linker.png"
  },
  {
    id: 3,
    name: "체커",
    image: "https://io-dashboard.s3.ap-northeast-2.amazonaws.com/image/ic_checker.png"
  }
]

function LinkerData(props) {
  return <h3>온도: {props.temp}, 소리: {props.sound}, 밝기: {props.light}</h3>;
}

function MyDeviceList({ name, image }) {
  console.log(name);
  return (
    <div>
      <h2>타입: {name}</h2>
      <img src={image} alt={name} />
    </div>
    
  );
}

function Dashboard() {
  return (
    <div>
      <h3>This is I/O Dashboard</h3>
      <LinkerData temp="23도" sound="37db" light="37%" />
      {devices.map(device => (
        <MyDeviceList key={device.id} name={device.name} image={device.image} />
      ))}
    </div>
  );
}

export default Dashboard