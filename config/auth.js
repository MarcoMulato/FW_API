'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Authenticator
  |--------------------------------------------------------------------------
  |
  | Authentication is a combination of serializer and scheme with extra
  | config to define on how to authenticate a user.
  |
  | Available Schemes - basic, session, jwt, api
  | Available Serializers - lucid, database
  |
  */
  authenticator: 'jwt',

  /*
  |--------------------------------------------------------------------------
  | Session
  |--------------------------------------------------------------------------
  |
  | Session authenticator makes use of sessions to authenticate a user.
  | Session authentication is always persistent.
  |
  */
  session: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'session',
    uid: 'correo_electronico',
    password: 'contraseña'
  },

  /*
  |--------------------------------------------------------------------------
  | Basic Auth
  |--------------------------------------------------------------------------
  |
  | The basic auth authenticator uses basic auth header to authenticate a
  | user.
  |
  | NOTE:
  | This scheme is not persistent and users are supposed to pass
  | login credentials on each request.
  |
  */
  basic: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'basic',
    uid: 'correo_electronico',
    password: 'contraseña'
  },

  /*
  |--------------------------------------------------------------------------
  | Jwt
  |--------------------------------------------------------------------------
  |
  | The jwt authenticator works by passing a jwt token on each HTTP request
  | via HTTP `Authorization` header.
  |
  */
  jwt: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'jwt',
    uid: 'correo_electronico',
    password: 'contraseña',
    options: {
      secret: Env.get('APP_KEY')
    }
  },
  jwt2: {
    serializer: 'lucid',
    model: 'App/Models/Lavanderia',
    scheme: 'jwt',
    uid: 'correo_electronico',
    password: 'contraseña',
    options: {
      secret: Env.get('APP_KEY')
    }
  },
  jwt3: {
    serializer: 'lucid',
    model: 'App/Models/Repartidor',
    scheme: 'jwt',
    uid: 'correo_electronico',
    password: 'contraseña',
    options: {
      secret: Env.get('APP_KEY')
    }
  },

  /*
  |--------------------------------------------------------------------------
  | Api
  |--------------------------------------------------------------------------
  |
  | The Api scheme makes use of API personal tokens to authenticate a user.
  |
  */
  api: {
    serializer: 'lucid',
    model: 'App/Models/Usuario',
    scheme: 'api',
    uid: 'correo_electronico',
    password: 'contraseña'
  }
}
