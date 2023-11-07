import { CalendarView, CalendarEvent } from 'kalend'; // import component
import dynamic from 'next/dynamic';
const Kalend = dynamic(() => import('kalend'), {
  ssr: false,
});
import 'kalend/dist/styles/index.css'; // import styles
const EventsCalendar: React.FC = () => {
  return (
    <>
      <Kalend
        onEventClick={() => {}}
        onNewEventClick={() => {}}
        events={[]}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        disabledViews={[CalendarView.DAY]}
        onSelectView={() => {}}
        // selectedView={() => {}}
        onPageChange={(...args) => {
          console.log('ARGS', args);
        }}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'en'}
      />
    </>
  );
};

export default EventsCalendar;
