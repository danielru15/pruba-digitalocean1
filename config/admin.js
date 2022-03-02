module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69e852b73254b642d0264e1c46343246'),
  },
});
