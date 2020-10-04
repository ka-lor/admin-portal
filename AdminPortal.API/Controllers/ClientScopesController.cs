using System.Linq;
using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using AdminPortal.API.Models;
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
        public async Task<IActionResult> Get(ClientModel query)
        {
            var data = await _ctx.ClientScopes.ToListAsync();

            var clients = data.Skip((query.Page * query.PageSize)).Take(query.PageSize).ToList();

            return Ok(new { count = data.Count(), results = clients });
        }
    }
}