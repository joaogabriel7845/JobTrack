using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Services
{
    public class ApplicationService : IApplicationService
    {
        private readonly AppDbContext _context;

        public ApplicationService(AppDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Application>> GetApplications()
        {
            return await _context.Applications.ToListAsync();  
        }
        public async Task<Application> GetApplicationById(int id)
        {
            var application = await _context.Applications.FindAsync(id);

            if (application == null)
            {
                throw new KeyNotFoundException("Application not found");
            }

            return application;
        }

        public async Task<IEnumerable<Application>> GetApplicationsByName(string positionName)
        {
            IEnumerable<Application> applications;

            if (!string.IsNullOrWhiteSpace(positionName))
            {
                applications = await _context.Applications.Where(n => n.Position.Contains(positionName)).ToListAsync();
            }
            else
            {
                applications = await GetApplications();
            }
            return applications;
        }
        public async Task CreateApplication(Application application)
        {
            try
            {
                _context.Applications.Add(application);

                await _context.SaveChangesAsync();
            }
            catch(DbUpdateException)
            {
                throw new InvalidOperationException("Error creating application");
            }
        }

        public async Task UpdateApplication(Application application)
        {
            throw new NotImplementedException();
        }
        public async Task DeleteApplication(Application application)
        {
            throw new NotImplementedException();
        }

        public async Task<Application> GetStatus(string status)
        {
            throw new NotImplementedException();
        }
    
    }
}