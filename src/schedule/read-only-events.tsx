import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month,
  Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import './read-only-events.css';
import { SampleBase } from '../common/sample-base';
import { getReadOnlyEventsData } from './helper';

/**
 * Schedule readonly events sample
 */

export class ReadonlyEvents extends SampleBase<{}, {}> {
  private data: Object[] = getReadOnlyEventsData();
  render() {
    return (
      <div className='schedule-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper'>
            <ScheduleComponent width='100%' height='650px' eventSettings={{ dataSource: this.data }}>
              <ViewsDirective>
                <ViewDirective option='Day' />
                <ViewDirective option='Week' />
                <ViewDirective option='WorkWeek' />
                <ViewDirective option='Month' />
              </ViewsDirective>
              <Inject services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]} />
            </ScheduleComponent>
          </div>
        </div>
        <div id='action-description'>
          <p>
            This demo showcases how to make specific events on the Scheduler to be displayed in a read-only mode. The read-only events
          can be simply viewed and prevented from undergoing any edit actions.
          </p>
        </div>
        <div id='description'>
          <p>
            In this demo, the events that has occurred on the past hours from the current time are made as read-only and
            the CRUD actions has been prevented on it. This has been done by setting <code>true</code> to
            the <code>IsReadonly</code> field of past events. By doing so, the <code>aria-readonly</code> attribute
            gets added into the event element and differentiate it from the other normal events.
          </p>
        </div>
      </div>
    );
  }
}