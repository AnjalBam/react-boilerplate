export function collectAccounts(groups) {
    const _collected_accounts = [];
    if (Array.isArray(groups) == false) {
        groups = [groups];
    }
    groups.forEach((group) => {
        const children = group?.children || [];
        const accounts = group?.accounts || [];

        if (children?.length == 0 && accounts?.length > 0) {
            // it is level 2 group
            _collected_accounts.push(...accounts);
        }
        if (children?.length > 0) {
            // it is level 1 group
            _collected_accounts.push(...collectAccounts(children));
        }
    });

    return _collected_accounts;
}

export const calculateCrDrAmounts = (accounts = []) => {
    let totalCr = 0.0;
    let totalDr = 0.0;
    console.log({ accounts });
    accounts.forEach((account) => {
        totalCr += +account?.tb_data?.credit_amount || 0.0;
        totalDr += +account?.tb_data?.debit_amount || 0.0;
    });
    return { totalCr, totalDr };
};

export const aggreGateTotalTrialBalance = (categories) => {
    let totalCr = 0.0;
    let totalDr = 0.0;
    categories.map(category => {
        const accounts = collectAccounts(category.groups || []);
        const { totalCr: _totalCr, totalDr: _totalDr } = calculateCrDrAmounts(accounts);
        totalCr += _totalCr;
        totalDr += _totalDr;
    })
    return { totalCr, totalDr };
};
