import React from "react";

interface ValidationContextType {
  clientValidationMessages: string[];
  updateClientValidationMessages: (value: string[]) => void;
}

const ValidationContext = React.createContext<ValidationContextType>({
  clientValidationMessages: [],
  updateClientValidationMessages: (value: string[]) => {},
});

export const ValidationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [clientValidationMessages, updateClientValidationMessages] =
    React.useState<string[]>([]);

  return (
    <ValidationContext.Provider
      value={{ clientValidationMessages, updateClientValidationMessages }}
    >
      {children}
    </ValidationContext.Provider>
  );
};

export function useValidation() {
  const { clientValidationMessages, updateClientValidationMessages } =
    React.useContext(ValidationContext);
  return [clientValidationMessages, updateClientValidationMessages] as const;
}
