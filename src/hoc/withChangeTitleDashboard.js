import { Fragment, useEffect } from "react";
import { useDashboard } from "hooks/useDashboard";

export const withChangeTitleDashboard = (Component) => (newTitle) => () => {
  const {
    events: { changeTitle },
  } = useDashboard();

  useEffect(() => {
    changeTitle(newTitle);
  }, [changeTitle]);

  return (
    <Fragment>
      <Component />
    </Fragment>
  );
};
