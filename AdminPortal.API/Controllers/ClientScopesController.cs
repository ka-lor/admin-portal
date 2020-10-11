using System;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
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

        public class ClientScopeSearchModel
        {
            public int Id { get; set; }
            public string Scope { get; set; }
            public int ClientId { get; set; }
            public int Page { get; set; }
            public int PageSize { get; set; }
            public string OrderBy { get; set; } = "Id";
            public bool Desc { get; set; } = false;
        }

        [HttpGet("api/v1/admin-portal/controllers/client-scopes")]
        public async Task<IActionResult> Get(ClientScopeSearchModel query)
        {
            string sort = String.Format("{0} {1}", query.OrderBy, query.Desc ? "desc" : "asc");

            var data = _ctx.ClientScopes.OrderBy(sort);

            var count = data.Count();

            var paged = data.Skip((query.Page * query.PageSize)).Take(query.PageSize);

            var results = await paged.ToListAsync();

            return Ok(new { count, results });
        }
    }
}