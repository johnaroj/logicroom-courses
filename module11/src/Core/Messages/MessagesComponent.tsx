import { observer } from "mobx-react";
import { MessagesPresenter } from "./MessagesPresenter";
import { useInjection } from "../Providers/Injection";
import { useValidation } from "../Providers/Validation";

export const MessagesComp = observer((props) => {
  const presenter = useInjection<MessagesPresenter>(MessagesPresenter);
  let [clientValidationMessages] = useValidation();

  return (
    <>
      {props.presenter.messages &&
        props.presenter.messages.map((item, i) => {
          return (
            <div style={{ backgroundColor: "red" }} key={i}>
              {" - "}
              {item}
            </div>
          );
        })}
      {clientValidationMessages &&
        clientValidationMessages.map((item, i) => {
          return (
            <div style={{ backgroundColor: "orange" }} key={i}>
              {" - "}
              {item}
            </div>
          );
        })}
    </>
  );
});
