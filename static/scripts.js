document.addEventListener('DOMContentLoaded', () => {
    const aiModeBtn = document.getElementById('ai-mode-btn');
    const volatilityModeBtn = document.getElementById('volatility-mode-btn');
    const aiModeSettings = document.getElementById('ai-mode-settings');
    const percentageInput = document.getElementById('percentage');
    const percentageDisplay = document.getElementById('percentage-display');

    aiModeBtn.addEventListener('click', () => {
        aiModeSettings.style.display = 'block';
    });

    volatilityModeBtn.addEventListener('click', () => {
        aiModeSettings.style.display = 'none';
    });

    //퍼센트 값으로 변경
    percentageInput.addEventListener('input', () => {
        percentageDisplay.textContent = `${percentageInput.value}%`;
    });
});
