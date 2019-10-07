using Microsoft.Owin.Security;

using Microsoft.Owin.Security.OAuth;

using System.Collections.Generic;

using System.Linq;

using System.Security.Claims;

using System.Threading.Tasks;

using System.Web.Http.Cors;

using System;

namespace InsurancesAPI.Auth
{
 

    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class AuthServerProvider : OAuthAuthorizationServerProvider

    {

        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)

        {

            context.Validated();

        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {

            var identity = new ClaimsIdentity(context.Options.AuthenticationType);

            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });

            var username = context.UserName;
            var password = context.Password;

            identity.AddClaim(new Claim("Role", "Administrator"));
            identity.AddClaim(new Claim("Id", "1"));

            if (username == "Admin" && password == "1111")
            {
                var props = new AuthenticationProperties(new Dictionary<string, string>{
                    {
                        "DisplayName", context.UserName
                    },
                    {
                        "Role", "Administrator"
                    }
                });

                var ticket = new AuthenticationTicket(identity, props);

                context.Validated(ticket);
            }
            else
            {
                context.SetError("invalid_grant", "Provided username and password is not matching, Please retry.");

                context.Rejected();
            }

            return;

        }

    }

}

