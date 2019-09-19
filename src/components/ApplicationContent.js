/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import Icon from './Icon';
import TopRightNav from './TopRightNav';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableHeadingData from './TableHeadingData';
import TableData from './TableData';
import TableRow from './TableRow';

export default function ApplicationContent() {
  return (
    <div css={getAppContentWrapperCSS}>
      <Header>
        <TopRightNav
          userImg={<Icon name="user" size="s" />}
          icon={<Icon name="bell" size="s" />}
          userName="Hey, Simple" />
      </Header>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadingData>{'ID'}</TableHeadingData>
            <TableHeadingData>{'Title'}</TableHeadingData>
            <TableHeadingData>{'Description'}</TableHeadingData>
            <TableHeadingData>{'Start Date'}</TableHeadingData>
            <TableHeadingData>{'Due Date'}</TableHeadingData>
            <TableHeadingData>{'Assigned To'}</TableHeadingData>
            <TableHeadingData>{'Created By'}</TableHeadingData>
            <TableHeadingData>{'Tag'}</TableHeadingData>
            <TableHeadingData>{'Status'}</TableHeadingData>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData>{'101'}</TableData>
            <TableData>{'API'}</TableData>
            <TableData>{'Create Backend APIs'}</TableData>
            <TableData>{'20 Sept, 2019'}</TableData>
            <TableData>{'02 Oct, 2019'}</TableData>
            <TableData>{'Jane'}</TableData>
            <TableData>{'Aastha'}</TableData>
            <TableData>{'#backend'}</TableData>
            <TableData>{''}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

function getAppContentWrapperCSS() {
  return {
    height: '100vh'
  }
}

