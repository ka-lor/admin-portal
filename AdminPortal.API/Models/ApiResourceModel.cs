using System;

namespace AdminPortal.API.Models
{
    public class ApiResourceModel
    {
        public int Id { get; set; }
        public bool Enabled { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public string AllowedAccessTokenSigningAlgorithms { get; set; }
        public bool ShowInDiscoveryDocument { get; set; }
        public DateTime Created { get; set; }
        public DateTime? Updated { get; set; }
        public DateTime? LastAccessed { get; set; }
        public bool NonEditable { get; set; }
        public string OrderBy { get; set; } = "Id";
        public int PageSize { get; set; } = 10;
        public int Page { get; set; } = 0;
        public bool Desc { get; set; } = false;

    }
}