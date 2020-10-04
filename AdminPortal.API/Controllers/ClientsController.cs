using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using AdminPortal.API.Models;
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

        [HttpGet("api/v1/admin-portal/controllers/clients/{id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpPost("api/v1/admin-portal/controllers/clients")]
        public async Task<IActionResult> Create(ClientModel client)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpPut("api/v1/admin-portal/controllers/clients")]
        public async Task<IActionResult> Update(ClientModel client)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpDelete("api/v1/admin-portal/controllers/clients/{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }
    }
}