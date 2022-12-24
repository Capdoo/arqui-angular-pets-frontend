export const environment = {
  production: true,
  // baseURL: 'http://localhost:8080',
  baseURL : "https://arqui-spring-pets-backend.herokuapp.com",

  // Controllers
  authController: 'auth',
  changePasswordController: 'change-password',
  detailsController: 'details',
  petsController: 'pets',
  homeController: 'pets/read-user',
  userDetailController:'users/read/single',


  // Methods
  readUserMethod: 'read-user',
  readMethod: 'read',
  createMethod: 'create',
  updateMethod: 'update',
  deleteMethod: 'delete',
};
