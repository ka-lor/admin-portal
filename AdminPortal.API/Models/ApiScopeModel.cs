using System;
using System.Collections.Generic;

namespace AdminPortal.API.Models
{
    public class ApiScopeModel
    {
        public int Id { get; set; }
        public bool Enabled { get; set; }
        public string Name { get; set; }
        public string DisplayName { get; set; }
        public string Description { get; set; }
        public bool Required { get; set; }
        public bool Emphasize { get; set; }
        public bool ShowInDiscoveryDocument { get; set; }
        public string OrderBy { get; set; } = "Id";
        public bool Desc { get; set; } = false;
        public int Page { get; set; } = 0;
        public int PageSize { get; set; } = 10;

    }
}
