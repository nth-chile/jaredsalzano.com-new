/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: 'var(--color-gray-950)',
                        a: {
                            color: 'var(--color-gray-950)',
                            // '&:hover': { color: ... },
                        },
                    },
                },
            },
        },
    },
}