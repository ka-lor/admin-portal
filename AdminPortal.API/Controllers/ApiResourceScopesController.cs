using System;
using System.Linq;
using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using AdminPortal.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq.Dynamic.Core;

namespace AdminPortal.API.Controllers
{
    [Route("api/v1/admin-portal/controllers")]
    public class ApiResourceScopesController : Controller
    {
        private readonly IdentityServerContext _ctx;

        public ApiResourceScopesController(IdentityServerContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("api-resource-scopes")]
        public async Task<IActionResult> Get(ApiScopeModel query)
        {
            string sort = String.Format("{0} {1}", query.OrderBy, query.Desc ? "desc" : "asc");

            var data = _ctx.ApiResourceScopes.OrderBy(sort);

            var count = data.Count();

            var paged = data.Skip((query.Page * query.PageSize)).Take(query.PageSize);

            var results = await paged.ToListAsync();

            return Ok(new { count, results });
        }

        [HttpGet("api-resource-scopes/{id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            var clients = await _ctx.ApiResourceScopes.ToListAsync();

            return Ok(clients);
        }

        [HttpPost("api-resource-scopes")]
        public async Task<IActionResult> Create(ApiScopeModel client)
        {
            var clients = await _ctx.ApiResourceScopes.ToListAsync();

            return Ok(clients);
        }

        [HttpPut("api-resource-scopes")]
        public async Task<IActionResult> Update(ApiScopeModel client)
        {
            var clients = await _ctx.ApiResourceScopes.ToListAsync();

            return Ok(clients);
        }

        [HttpDelete("api-resource-scopes/{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            var clients = await _ctx.ApiResourceScopes.ToListAsync();

            return Ok(clients);
        }
    }
}