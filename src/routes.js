// will code to register/glue routes to controller functions

/**
 * This function binds routes to controller functions.
 * 
 * @param {Express.Application} app express application
 */
export function setupRoutes(app) {
  app.get('/' , (req, res) =>{
    res.send('Start')
  });
}
