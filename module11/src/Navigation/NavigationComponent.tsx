import * as React from "react";
import { observer } from "mobx-react";
import { useInjection } from "../Core/Providers/Injection";
import { Router } from "../Routing/Router";
import { NavigationPresenter } from "./NavigationPresenter";

type NavigationComponentProps = {
  presenter: NavigationPresenter;
  router: Router;
};

export const NavigationComponent = observer(() => {
  const { presenter, router } = useInjection<NavigationComponentProps>({
    NavigationPresenter,
    Router,
  });
  return (
    <div className="navigation-container">
      <div
        className="navigation-item-header"
        style={{ backgroundColor: "#5BCA06" }}
      >
        {presenter.viewModel.currentSelectedVisibleName}
      </div>
      {presenter.viewModel.menuItems.map((menuItem, i) => {
        return (
          <div
            key={i}
            className="navigation-item"
            style={{
              backgroundColor: "#3DE7CF",
            }}
            onClick={() => {
              router.goToId(menuItem.id!);
            }}
          >
            {menuItem.visibleName}
          </div>
        );
      })}
      {presenter.viewModel.showBack && (
        <div
          className="navigation-item"
          onClick={() => {
            presenter.back();
          }}
          style={{ backgroundColor: "#2e91fc" }}
        >
          <span>⬅ </span>Back
        </div>
      )}
    </div>
  );
});
