import React from 'react';
import BossmodeCGM from '@bossmodecg/management-react';

export default class InfoPanel extends BossmodeCGM.Components.Widget {
  constructor(props) {
    super(props);

    this.setWidgetOptions({
      title: "OBS Info",

      panelStyle: 'green'
    });
  }

  _renderWidget() {
    const client = this.props.bossmodecgClient;

    const obs = client.module("obsstudio");

    const obsStreamStatus = obs.state.streamStatus || {};

    return (
      <div style={{ height: '12rem', overflow: 'scroll' }}>
        <p>
          Streaming: { !!obsStreamStatus.streaming || "unknown" }<br />
          Recording: { !!obsStreamStatus.recording || "unknown" }<br />
          <br />
          Scene: { obs.state.sceneName || "unknown" }<br />
          FPS: { obsStreamStatus.fps || "unknown" }<br />
          bPS: { obsStreamStatus.bytesPerSec || "unknown" }
        </p>
      </div>
    );
  }
}
