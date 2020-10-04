using System.Threading.Tasks;
using AdminPortal.API.Data.IdentityServer;
using AdminPortal.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdminPortal.API.Controllers
{
    [Route("api/v1/admin-portal/controllers")]
    public class ClientsController : Controller
    {
        private readonly IdentityServerContext _ctx;

        public ClientsController(IdentityServerContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet("clients")]
        public async Task<IActionResult> Get()
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpGet("clients/{id}")]
        public async Task<IActionResult> GetById(int Id)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpPost("clients")]
        public async Task<IActionResult> Create(ClientModel client)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpPut("clients")]
        public async Task<IActionResult> Update(ClientModel client)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }

        [HttpDelete("clients/{id}")]
        public async Task<IActionResult> Delete(int Id)
        {
            var clients = await _ctx.Clients.ToListAsync();

            return Ok(clients);
        }
    }
}