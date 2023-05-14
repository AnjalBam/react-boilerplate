import TrialBalance from "../components/trial-balance/TrialBalance";
import TrialBalanceProvider from "../context/trial-balance.context";

const TrialBalancePage = () => {
    return (
        <TrialBalanceProvider>
            <TrialBalance />
        </TrialBalanceProvider>
    );
};

export default TrialBalancePage;
