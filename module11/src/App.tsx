import React from "react";
import { observer } from "mobx-react";
import { useInjection } from "./Core/Providers/Injection";
import { AppPresenter } from "./AppPresenter";
import { NavigationComponent } from "./Navigation/NavigationComponent";
import { HomeComponent } from "./Home/HomeComponent";
import { useValidation } from "./Core/Providers/Validation";
import { BooksComponent } from "./Books/BooksComponent";
import { AuthorsComponent } from "./Authors/AuthorsComponent";

export const App = observer(() => {
  const [_, updateClientValidationMessages] = useValidation();
  const presenter = useInjection<AppPresenter>(AppPresenter);

  React.useEffect(() => {
    presenter.load(onRouteChange);
  }, []);

  const onRouteChange = React.useCallback(() => {
    updateClientValidationMessages([]);
  }, []);

  const renderedComponents = [
    {
      id: "homeLink",
      component: <HomeComponent key="homePage" />,
    },
    {
      id: "booksLink",
      component: <BooksComponent key="booksLink" />,
    },
    {
      id: "authorsLink",
      component: <AuthorsComponent key="authorsLink" />,
    },
  ];

  return (
    <div className="container">
      <div className="w3-row">
        <div className="w3-col s4 w3-center">
          <NavigationComponent />
        </div>
        <div className="w3-col s8 w3-left">
          {renderedComponents.map((current) => {
            return (
              presenter.currentRoute.routeId === current.id && current.component
            );
          })}
        </div>
      </div>
    </div>
  );
});
