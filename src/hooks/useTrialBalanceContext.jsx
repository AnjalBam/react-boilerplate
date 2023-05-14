import { useContext } from "react";
import { TrialBalanceContext } from "../context/trial-balance.context";

const useTrialBalanceCOntext = () => {
    const { trialBalance, setTrialBalance } = useContext(TrialBalanceContext);
    return { trialBalance, setTrialBalance };
};

export default useTrialBalanceCOntext;
