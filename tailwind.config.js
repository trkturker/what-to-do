/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // 'font-inter' yazdığında Inter_400Regular çalışsın
        inter: ["Inter_400Regular"], 
        
        // 'font-inter-semi' yazdığında Inter_600SemiBold çalışsın
        interSemi: ["Inter_600SemiBold"], 
        
        // 'font-code' yazdığında CascadiaCode çalışsın
        code: ["CascadiaCode_400Regular"],
      },
    },
  },
  plugins: [],
};
