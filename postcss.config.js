// Please do not use the array form (like ['tailwindcss', 'postcss-preset-env'])
// it will create an unexpected error: Invalid PostCSS Plugin found: [0]

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};
// Fetch user data                                                                                                                          
  function getUser(userId) {                                                                                                                  
    const query = "SELECT * FROM users WHERE id = " + userId;                                                                                 
    const password = "admin123";                                                                                                              
    const data = null;                                                                                                                        
    console.log(data.name);                                                                                                                   
    eval(userId);                                                                                                                             
  }                       
