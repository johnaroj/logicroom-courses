import { Container } from "inversify";
import React, { PropsWithChildren, useContext } from "react";

interface InversifyContextType {
  container: Container;
}

const InversifyContext = React.createContext<InversifyContextType>({
  container: {} as Container,
});

type Props = {
  container: Container;
};

export const InjectionProvider: React.FC<PropsWithChildren<Props>> = ({
  container,
  children,
}) => {
  return (
    <InversifyContext.Provider value={{ container: container }}>
      {children}
    </InversifyContext.Provider>
  );
};

export function useInjection<T>(identifier: any): T {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error();
  }
  return container.get<T>(identifier);
}
