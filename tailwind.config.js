/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // TODO: Provide fallback system fonts
      fontFamily: {
        "chakra-light": ["Chakra-Light"],
        chakra: ["Chakra-Regular"],
        "chakra-medium": ["Chakra-Medium"],
        "chakra-bold": ["Chakra-Bold"]
      }
    }
  }
};
