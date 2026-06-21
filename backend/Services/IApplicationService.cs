using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Enums;

namespace backend.Services
{
    public interface IApplicationService
    {
        Task<IEnumerable<Application>> GetApplications();
        Task<Application> GetApplication(int id);
        Task<IEnumerable<Application>> GetApplicationsWithStatus(ApplicationStatus status);
        Task<IEnumerable<Application>> GetApplicationsByName(string positionName);
        Task CreateApplication(Application application);
        Task UpdateApplication(Application application);
        Task DeleteApplication(Application application);
    }
}