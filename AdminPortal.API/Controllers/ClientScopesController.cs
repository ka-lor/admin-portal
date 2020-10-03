using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminPortal.API.Controllers
{
    public class ClientScopesController : Controller
    {
        private readonly IdentityServerContext _ctx;

        public ClientScopesController(IdentityServerContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("api/v1/admin-portal/controllers/client-scopes")]
        public async Task<IActionResult> Get()
        {
            var clients = await _ctx.ClientScopes.ToListAsync();

            return Ok(clients);
        }
    }
}