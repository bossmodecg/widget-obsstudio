/* eslint-disable class-methods-use-this */

import React from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';
import BossmodeCGM from '@bossmodecg/management-react';

export default class ScenePanel extends BossmodeCGM.Components.Widget {
  constructor(props) {
    super(props);

    this.setWidgetOptions({
      title: "OBS Scene Management",

      panelStyle: 'darkBlue',
      panelSize: 'full'
    });
  }

  _renderWidget() {
    // const client = this.props.bossmodecgClient;
    // const obs = client.module("obsstudio");

    return (
      <div style={{ height: '12rem', overflow: 'scroll' }}>
        <Row>
          <Col xs={12} md={6} lg={5}>
            {/* scene list */}
          </Col>
          <Col xs={12} md={6} lg={5}>
            {/* transition list */}
          </Col>
          <Col xs={12} md={12} lg={2}>
            {/* go-button */}
          </Col>
        </Row>
      </div>
    );
  }
}
