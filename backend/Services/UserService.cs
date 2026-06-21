using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class UserService : IUserService
    {
        private readonly AppDbContext _context;

        public UserService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<User> GetById(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                throw new KeyNotFoundException("Application not found");
            }

            return user;
        }

        public async Task<User> GetByEmail(string email)
        {
            var user = await _context.Users.FindAsync(email);

            if (user == null)
            {
                throw new KeyNotFoundException("Application not found");
            }

            return user;
        }

        public async Task CreateUser(User user)
        {
            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(user.PasswordHash);

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }
    }
}