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
            var data = _ctx.ClientScopes.Select(o => o);
            var count = data.Count();
            var results = await data.Skip((query.Page * query.PageSize)).Take(query.PageSize).ToListAsync();

            return Ok(new { count, results });
        }
    }
}