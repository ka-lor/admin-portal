using System;
using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using Microsoft.AspNetCore.Mvc;

namespace AdminPortal.API.Controllers
{
    public class ApiResourcesController : Controller
    {
        public class NewApiResource
        {
            public ApiResources Resource { get; set; }
            public ApiResourceScopes Scopes { get; set; }
        }

        public async Task<IActionResult> Get()
        {
            return Ok();
        }
    }
}


/// Add Resource
/// Then add scopes
/// Then create secret