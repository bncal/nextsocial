/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            "large": "0.95rem"
        },
    },

    daisyui: {
        themes: [
            {
                mytheme: {
                    "base-100": "#F8FAFC",
                    "base-200": "#F1F5F9",
                    "base-300": "#E2E8F0",
                    "base-content": "#1E293B",
                    "info": "#B9B9B9",
                    "primary": "#3B82F6",
                }
            },
        ],
    },

    plugins: [
        require("daisyui"),

    ],
}
