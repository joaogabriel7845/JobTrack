using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace backend.Services
{
    public interface IUserService
    {
        Task<User> GetById(int id);
        Task<User> GetByEmail(string email);
        Task CreateUser(User user);
    }
}