/** @jsx jsx */
import { jsx } from '@emotion/core';
import Header from './Header';
import CustomButton from './NewTaskButton';
import Icon from './Icon';
import Status from './Status';
import StatusItem from './StatusItem';
import NewTaskButton from './NewTaskButton';
import { TaskTitle } from './Title';

export default function SecondaryNav() {
  return (
    <div css={getSecondNavWrapperCSS}>
      <Header>
        <NewTaskButton label='New Task' icon={<Icon name='add' size='s' />} />
      </Header>
      <TaskTitle label='Tasks'/> 
      <Status>
        <StatusItem label={'In Progress'} status={StatusItem.status.inProgress} isActive/>
        <StatusItem label={'To Do'} status={StatusItem.status.todo}/>
        <StatusItem label={'Completed'} status={StatusItem.status.complete} />
      </Status>
    </div>
  );
}


function getSecondNavWrapperCSS() {
  return {
    height: '100vh',
    backgroundColor: 'f8f1f1',
    boxShadow:'6px 0 2px -5px #88888854'
  }
}

function getTitleCSS(){
  return {

  }
}
