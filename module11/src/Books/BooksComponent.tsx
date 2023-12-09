import React from "react";
import { observer } from "mobx-react";
import { useInjection } from "../Core/Providers/Injection";
import { BooksPresenter } from "./BooksPresenter";

export const BooksComponent = observer((props) => {
  const presenter = useInjection<BooksPresenter>(BooksPresenter);
  return (
    <div>
      <h1>Books</h1>
    </div>
  );
});
