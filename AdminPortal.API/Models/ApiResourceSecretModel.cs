using System;
using System.Collections.Generic;

namespace AdminPortal.API.Models
{
    public class ApiResourceSecretModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Value { get; set; }
        public DateTime? Expiration { get; set; }
        public string Type { get; set; }
        public DateTime Created { get; set; }
        public int ApiResourceId { get; set; }
        public string OrderBy { get; set; } = "Id";
        public bool Desc { get; set; } = false;
        public int Page { get; set; } = 0;
        public int PageSize { get; set; } = 10;

    }
}
