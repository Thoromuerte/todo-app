import { getCurrentDay, getCurrentDate } from "../../utilities/date";

interface AppMenuProps {
  onClear: () => void;
  undoneTodoCount: number;
  filterName: string;
  onFilterChange: (filterName: string) => void;
}

export const AppMenu = (props: AppMenuProps): JSX.Element => {
  const { onClear, undoneTodoCount, onFilterChange, filterName } = props;
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
          className={`button button--small ${
            filterName === "all" ? "button--selected" : ""
          }`}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={`button button--small ${
            filterName === "active" ? "button--selected" : ""
          }`}
          onClick={() => onFilterChange("active")}
        >
          Active
        </button>
        <button
          className={`button button--small ${
            filterName === "completed" ? "button--selected" : ""
          }`}
          onClick={() => onFilterChange("completed")}
        >
          Completed
        </button>
      </div>
    </div>
  );
};
