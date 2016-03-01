import React, { Component } from 'react'

import qrcode from 'yaqrcode'

export default class ScanHelpButton extends Component {
  render() {
    let base64 = qrcode('hello world', {
      size: 220
    })

    return (
      <img src={base64} />
    )
  }
}
