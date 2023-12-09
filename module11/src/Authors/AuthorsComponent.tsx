import React from "react";
import { observer } from "mobx-react";
import { useInjection } from "../Core/Providers/Injection";
import { AuthorsPresenter } from "./AuthorsPresenter";

export const AuthorsComponent = observer(() => {
  const presenter = useInjection<AuthorsPresenter>(AuthorsPresenter);
  return (
    <div>
      <h1>Authors</h1>
    </div>
  );
});
