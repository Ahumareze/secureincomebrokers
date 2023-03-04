const percentage = (amount, lowerRage, higherRage) => {
    for (let i = lowerRage; i <= higherRage; i += lowerRage) {
        const amountInvested = amount;
        const percentage = (amountInvested / higherRage) * 100;
        return percentage
    }
};

export default percentage