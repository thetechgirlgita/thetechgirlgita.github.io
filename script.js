
document.addEventListener('DOMContentLoaded', () => {
    
    const checkbox = document.getElementById('checkbox');
    const greeting = document.getElementById('greeting');
    const glow = document.getElementById('mouseGlow');

    // --- 1. MOUSE GLOW LOGIC ---
    document.addEventListener('mousemove', (e) => {
        // tHis pulls the current accent color (Red or Cyan) so the glow matches the thema
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        
        // added 26 to the hex color to make it transparent (15% opacity)
        glow.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, ${accentColor}26 0%, transparent 45%)`;
    });

    // --- 2. DYNAMIC GREETING LOGIC ---
    const hour = new Date().getHours();
    if (hour < 12) greeting.textContent = "Good Morning, There!";
    else if (hour < 18) greeting.textContent = "Good Afternoon, There!";
    else greeting.textContent = "Good Evening, There!";

    // --- 3. THEME TOGGLE LOGIC ---
    
    // function to set theme
    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // SYnc the checkbox state
        checkbox.checked = (theme === 'light');
    };

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);

    // Listen for manual toggle
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});
