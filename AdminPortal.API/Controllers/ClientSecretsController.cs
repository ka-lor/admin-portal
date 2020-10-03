using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminPortal.API.Controllers
{
    public class ClientSecretsController : Controller
    {
        private readonly IdentityServerContext _ctx;

        public ClientSecretsController(IdentityServerContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("api/v1/admin-portal/controllers/client-secrets")]
        public async Task<IActionResult> Get()
        {
            var clients = await _ctx.ClientSecrets.ToListAsync();

            return Ok(clients);
        }
    }
}