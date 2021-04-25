using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly DataContext _context;

        public AccountController(DataContext context)
        {
            _context = context;
        }

        [HttpPost("registro")]
        public async Task<ActionResult<UserDto>> Register(RegisterDto newUser)
        {
            if (await UserExists(newUser.Username)) return BadRequest("Usuário já existe");

            var user = new AppUser
            {
                UserName = newUser.Username,
                Password = newUser.Password
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            
            return new UserDto
            {
                Username = user.UserName,
                Password = user.Password
            };
        }
        
        
        
        // Helper Method
        private async Task<bool> UserExists(string username)
        {
            return await _context.Users.AnyAsync(response => response.UserName == username.ToLower());
        }
    }
}