using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminPortal.API.Controllers
{
    public class ClientsController : Controller
    {
        private readonly IdentityServerContext _ctx;

        public ClientsController(IdentityServerContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("api/v1/admin-portal/controllers/clients")]
        public async Task<IActionResult> Get()
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }
    }
}