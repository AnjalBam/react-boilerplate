import React from "react";

export const TrialBalanceContext = React.createContext();

const TrialBalanceProvider = ({ children }) => {
    const [trialBalance, setTrialBalance] = React.useState(null);

    return (
        <TrialBalanceContext.Provider value={{ trialBalance, setTrialBalance }}>
            {children}
        </TrialBalanceContext.Provider>
    );
};

export default TrialBalanceProvider;
