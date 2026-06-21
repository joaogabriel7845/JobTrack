using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

using backend.Enums;

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
        public async Task<Application> GetApplication(int id)
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

        public async Task<IEnumerable<Application>> GetApplicationsWithStatus(ApplicationStatus status)
        {
            IEnumerable<Application> applications = await _context.Applications.Where(s => s.Status == status).ToListAsync();

            return applications;

        }
        public async Task CreateApplication(Application application)
        {
            _context.Applications.Add(application);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateApplication(Application application)
        {
            _context.Entry(application).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
        public async Task DeleteApplication(Application application)
        {
            _context.Applications.Remove(application);
            await _context.SaveChangesAsync();
        }

        
    
    }
}