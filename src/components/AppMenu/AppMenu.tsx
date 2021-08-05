import { getCurrentDay, getCurrentDate } from "../../utilities/date";

interface AppMenuProps {
  onClear: () => void;
  undoneTodoCount: number;
  filterName: string;
  onFilterChange: (filterName: string) => void;
}

export const AppMenu = (props: AppMenuProps): JSX.Element => {
  const { onClear, undoneTodoCount, onFilterChange, filterName } = props;

  const getClassnameByFilter = (name: string) => {
      return `button button--small ${
        filterName === name ? "button--selected" : ""
      }`;
  };

  return (
    <div className="app-menu">
      <div className="menu-top-lane">
        <span className="date-day">
          <strong>{getCurrentDate("weekday")},</strong> {getCurrentDay()}
        </span>
        <span className="counter">{undoneTodoCount} Tasks left</span>
      </div>
      <div className="menu-bottom-lane">
        <span className="date-month">{getCurrentDate("month")}</span>
        <button className="button" type="button" onClick={onClear}>
          CLEAR LIST
        </button>
      </div>
      <div className="menu-filters">
        <button
          className={getClassnameByFilter("all")}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={getClassnameByFilter("active")}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={getClassnameByFilter("completed")}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
