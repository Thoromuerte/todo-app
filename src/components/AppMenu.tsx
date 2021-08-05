import { getCurrentDay, getCurrentDate } from "../utilities/date";

interface AppMenuProps {
  onClear: () => void;
  undoneTodoCount: number;
}


export const AppMenu = (props: AppMenuProps): JSX.Element => {
  const {onClear, undoneTodoCount} = props;
  return (
    <div className="app-menu">
      <div className="menu-top-lane">
        <span className="date-day">
          <strong>{getCurrentDate("weekday")},</strong> {getCurrentDay()}
        </span>
        <span className="counter">{undoneTodoCount} Tasks</span>
      </div>
      <div className="menu-bottom-lane">
        <span className="date-month">{getCurrentDate("month")}</span>
        <button className="button" type="button" onClick={onClear}>
          CLEAR LIST
        </button>
      </div>
      <div className="menu-filters">
        <button className="button button--small">All</button>
        <button className="button button--small">Active</button>
        <button className="button button--small">Completed</button>
      </div>
    </div>
  );
};
