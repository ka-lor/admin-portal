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
    public class ApiResourcesController : Controller
    {
        private readonly IdentityServerContext _ctx;

        public ApiResourcesController(IdentityServerContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("api-resources")]
        public async Task<IActionResult> Get(ApiResourceModel query)
        {
            string sort = String.Format("{0} {1}", query.OrderBy, query.Desc ? "desc" : "asc");

            var data = _ctx.ApiResources.OrderBy(sort);

            var count = data.Count();

            var paged = data.Skip((query.Page * query.PageSize)).Take(query.PageSize);

            var results = await paged.ToListAsync();

            return Ok(new { count, results });
        }

        [HttpGet("api-resources/{id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            var clients = await _ctx.ApiResources.ToListAsync();

            return Ok(clients);
        }

        [HttpPost("api-resources")]
        public async Task<IActionResult> Create(ApiResourceModel client)
        {
            var clients = await _ctx.ApiResources.ToListAsync();

            return Ok(clients);
        }

        [HttpPut("api-resources")]
        public async Task<IActionResult> Update(ApiResourceModel client)
        {
            var clients = await _ctx.ApiResources.ToListAsync();

            return Ok(clients);
        }

        [HttpDelete("api-resources/{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            var clients = await _ctx.ApiResources.ToListAsync();

            return Ok(clients);
        }
    }
}