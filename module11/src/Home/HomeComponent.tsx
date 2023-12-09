import { observer } from "mobx-react";
import { useInjection } from "../Core/Providers/Injection";

export const HomeComponent = observer(() => {
  const presenter = useInjection({});
  return (
    <>
      <h1>Home</h1>
    </>
  );
});
