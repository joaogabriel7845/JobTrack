using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Services
{
    public interface IApplicationService
    {
        Task<IEnumerable<Application>> GetApplications();
        Task<Application> GetApplicationById(int id);
        Task<Application> GetStatus(string status);
        Task<IEnumerable<Application>> GetApplicationsByName(string positionName);
        Task CreateApplication(Application application);
        Task UpdateApplication(Application application);
        Task DeleteApplication(Application application);
    }
}