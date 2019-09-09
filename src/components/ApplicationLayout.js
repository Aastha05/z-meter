/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Row from './Row';
import Col from './Col';
import MainNav from './MainNav';
import SecondaryNav from './SecondaryNav';
import ApplicationContent from './ApplicationContent';
import Widget from './Widget';

export default function ApplicationLayout({ header, body, footer }) {
  return (
    <Widget>
      <Row margin={-8}>
        <Col width={1 / 4}>
          <MainNav />
        </Col>
        <Col width={1 / 4}>
          <SecondaryNav />
        </Col>
        <Col width={1}>
          <ApplicationContent />
        </Col>
      </Row>
    </Widget>
  );
}

function getGlobalCSS() {
  return `
  @import url('https://fonts.googleapis.com/css?family=Arsenal&display=swap');
    body {
      margin: 0px;
      
    }
  `
}

function getApplicationLayoutCSS() {
  return {
    display: 'flex',
    flexDirection: 'column'
  };
}

function getHeaderCSS() {
  return {
    display: 'flex',
  };
}


function getFooterCSS() {
  return {
    display: 'flex',
  };
}

function getBodyCSS() {
  return {
    display: 'flex'
  };
}
