/** @jsx jsx */
import { jsx, Global } from '@emotion/core';
import Row from './Row';
import Col from './Col';
import MainNav from './MainNav';

export default function ApplicationLayout({ header, body, footer }) {
  return (
    <Row>
      <Col width={1 / 3}>
        <MainNav />
      </Col>
      <Col width={1 / 5}>
        left 2
      </Col>
      <Col>
        main
      </Col>
    </Row>
  );
}

function getGlobalCSS() {
  return `
    body {
      margin: 0;
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
