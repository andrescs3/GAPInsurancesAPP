using Microsoft.Owin;

using Microsoft.Owin.Cors;

using Microsoft.Owin.Security.OAuth;

using Owin;

using System;

using System.Collections.Generic;

using System.Linq;

using System.Web;

using System.Web.Http;

using InsurancesAPI;
using InsurancesAPI.Auth;

//[assembly: OwinStartup(typeof(InsurancesAPI.Startup))]

namespace InsurancesAPI

{

    public class Startup

    {

        public void ConfigureAuth(IAppBuilder app)

        {

            app.UseCors(CorsOptions.AllowAll);

            var OAuthOptions = new OAuthAuthorizationServerOptions {
                AllowInsecureHttp = true,
                TokenEndpointPath = new PathString("/token"),
                AccessTokenExpireTimeSpan = TimeSpan.FromMinutes(20),
                Provider = new AuthServerProvider()
            };

            app.UseOAuthBearerTokens(OAuthOptions);

            app.UseOAuthAuthorizationServer(OAuthOptions);

            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

 

        }

        public void Configuration(IAppBuilder app)

        {

            app.UseCors(Microsoft.Owin.Cors.CorsOptions.AllowAll);

            ConfigureAuth(app);

            //GlobalConfiguration.Configure(WebApiConfig.Register);

        }

    }

}
